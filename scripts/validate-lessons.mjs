// Validatore delle lezioni — regole E1–E10 e W1–W4 di CONTRATTO_V3.md §7.
// Uso (da math-library):  npm run validate [-- --json] [-- --only-errors]
// Lezioni con `contratto: "3.0"` -> regole v3; senza `contratto` -> regole legacy v2.1.
// Si validano solo le lezioni `completa` e `da-rivedere`; le altre sono contate e saltate.
// Il validatore NON corregge nulla e NON giudica il contenuto matematico.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { load as yamlLoad } from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LESSONS_DIR = path.join(ROOT, 'src', 'lessons');
const CATALOGO = path.resolve(ROOT, '..', 'CATALOGO_FONTI.md');

const args = new Set(process.argv.slice(2));
const AS_JSON = args.has('--json');
const ONLY_ERRORS = args.has('--only-errors');

// ── costanti del contratto ───────────────────────────────────────────────────
const VALIDATED_STATES = new Set(['completa', 'da-rivedere']);
const SPECIAL_LANGS = new Set(['checkpoint', 'plot', 'slider', 'normalbell']);
const JSON_LANGS = new Set(['plot', 'slider', 'normalbell']);
const OLD_SLIDER_KEYS = ['param', 'min', 'max', 'step', 'default'];
const SLIDER_REQUIRED = ['fn', 'pname', 'pmin', 'pmax'];
const FORBIDDEN = ['si vede facilmente', 'banalmente', 'da cui segue', 'è immediato', 'ovviamente', 'è ovvio'];

const V3_SECTIONS = ['Intuizione', 'Teoria', 'Dimostrazioni', 'Procedura', 'Modello', 'Esempi', 'Errori comuni', 'Collegamenti e riepilogo', 'Esercizi'];
const V3_REQUIRED = {
  teorica: ['Intuizione', 'Teoria', 'Esercizi'],
  tecnica: ['Intuizione', 'Teoria', 'Procedura', 'Esempi', 'Esercizi'],
  applicata: ['Intuizione', 'Teoria', 'Modello', 'Esercizi'],
};
const V3_OPTIONAL = new Set(['Errori comuni', 'Collegamenti e riepilogo']);
const LEGACY_SECTIONS = ['1. Motivazione e intuizione', '2. Teoria', '3. Dimostrazioni', '4. Esempi', '5. Collegamenti e riepilogo', '6. Esercizi'];

const QUANTITA = {
  essenziale: { esempi: [3, 4], esercizi: [5, Infinity], checkpoint: [1, 2], fonti: 1 },
  approfondita: { esempi: [6, Infinity], esercizi: [8, Infinity], checkpoint: [2, 3], fonti: 2 },
};

const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const slugify = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// ── caricamento ──────────────────────────────────────────────────────────────
function listMd(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listMd(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out.sort();
}

function loadCatalogIds() {
  if (!fs.existsSync(CATALOGO)) return null;
  return new Set([...fs.readFileSync(CATALOGO, 'utf8').matchAll(/^### (\S+)\s*$/gm)].map(m => m[1]));
}

function parseLesson(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file);
  const lesson = { file, rel, raw, data: {}, body: '', bodyStartLine: 1, parseError: null, lessonSlug: path.basename(file, '.md') };
  try {
    const parsed = matter(raw, { engines: { yaml: s => yamlLoad(s) } });
    lesson.data = parsed.data || {};
    lesson.body = parsed.content;
    const idx = raw.indexOf(parsed.content);
    lesson.bodyStartLine = raw.slice(0, idx >= 0 ? idx : 0).split('\n').length;
  } catch (e) {
    lesson.parseError = String(e.message || e).split('\n')[0];
  }
  const d = lesson.data;
  lesson.topicSlug = slugify(d.topic_it || d.argomento || 'generale');
  lesson.subjectId = d.subject || d.materia;
  lesson.url = `/${lesson.subjectId}/${lesson.topicSlug}/${lesson.lessonSlug}`;
  return lesson;
}

// ── analisi del corpo (fence-aware) ──────────────────────────────────────────
function scanBody(body, startLine) {
  const lines = body.split('\n');
  const fences = [];            // {lang, startLine, content, closed}
  const outside = [];           // {text, line} righe fuori da code fence
  let cur = null;
  lines.forEach((text, i) => {
    const line = startLine + i;
    const open = /^```(\S*)\s*$/.exec(text);
    if (!cur) {
      if (open && text.startsWith('```')) { cur = { lang: open[1], startLine: line, lines: [], closed: false }; return; }
      outside.push({ text, line });
    } else if (/^```\s*$/.test(text)) {
      cur.closed = true; cur.content = cur.lines.join('\n'); fences.push(cur); cur = null;
    } else cur.lines.push(text);
  });
  if (cur) { cur.content = cur.lines.join('\n'); fences.push(cur); }
  return { fences, outside, unclosed: cur };
}

function countOutsideMatches(outside, re) {
  const n = new Set();
  for (const { text } of outside) { const m = re.exec(text); if (m) n.add(m[1]); }
  return n.size;
}

function sectionsOf(outside) {
  const heads = [];
  outside.forEach(({ text, line }, idx) => {
    const m = /^##\s+(.*?)\s*$/.exec(text);
    if (m && !text.startsWith('###')) heads.push({ title: m[1], line, idx });
  });
  heads.forEach((h, i) => { h.end = i + 1 < heads.length ? heads[i + 1].idx : outside.length; });
  return heads;
}

// ── validazione di una lezione ───────────────────────────────────────────────
function validate(lesson, ctx) {
  const issues = [];
  const E = (rule, line, msg) => issues.push({ level: 'E', rule, line: line || 1, msg });
  const W = (rule, line, msg) => issues.push({ level: 'W', rule, line: line || 1, msg });
  const d = lesson.data;
  const stats = { righe: lesson.raw.split('\n').length, checkpoint: 0, esempi: 0, esercizi: 0 };

  // E1
  if (lesson.parseError) { E('E1', 1, `frontmatter YAML non valido: ${lesson.parseError}`); return { issues, stats }; }
  const v3 = d.contratto === '3.0';
  const required = ['id', 'titolo', 'materia', 'argomento', 'slug', 'fonti_integrate', 'stato'];
  if (v3) required.push('contratto', 'profondita', 'tipo');
  for (const k of required) {
    if (d[k] === undefined || d[k] === null || d[k] === '') E('E1', 1, `campo obbligatorio mancante: ${k}`);
  }
  if (v3) {
    if (d.profondita && !['essenziale', 'approfondita'].includes(d.profondita)) E('E1', 1, `profondita non valida: ${d.profondita}`);
    if (d.tipo && !V3_REQUIRED[d.tipo]) E('E1', 1, `tipo non valido: ${d.tipo}`);
  }

  // E2
  if (d.id && ctx.idCount.get(d.id) > 1) E('E2', 1, `id duplicato: ${d.id}`);
  for (const field of ['prerequisiti', 'collegamenti']) {
    for (const id of Array.isArray(d[field]) ? d[field] : []) {
      if (!ctx.byId.has(id)) E('E2', 1, `${field}: id inesistente "${id}"`);
    }
  }
  for (const field of ['estende', 'approfondimento']) {
    if (d[field] && !ctx.byId.has(d[field])) E('E2', 1, `${field}: id inesistente "${d[field]}"`);
  }

  // E3
  if (ctx.catalog) {
    for (const f of Array.isArray(d.fonti_integrate) ? d.fonti_integrate : []) {
      if (!f || !f.id_fonte || !ctx.catalog.has(f.id_fonte)) E('E3', 1, `id_fonte non presente in CATALOGO_FONTI.md: "${f && f.id_fonte}"`);
    }
  }

  const { fences, outside, unclosed } = scanBody(lesson.body, lesson.bodyStartLine);

  // E9 (fence dispari)
  if (unclosed) E('E9', unclosed.startLine, 'fence di codice non chiuso (numero dispari di ```)');

  // E5 / E6 sui blocchi
  const present = new Set();
  for (const fc of fences) {
    if (!SPECIAL_LANGS.has(fc.lang)) {
      if (fc.lang) E('E5', fc.startLine, `blocco codice con linguaggio non ammesso: "${fc.lang}"`);
      continue;
    }
    present.add(fc.lang);
    if (fc.lang === 'checkpoint') {
      stats.checkpoint++;
      const di = fc.content.indexOf('[domanda]');
      const ri = fc.content.indexOf('[risposta]');
      if (di === -1 || ri === -1 || ri < di) E('E6', fc.startLine, 'checkpoint senza [domanda] e [risposta] nell\'ordine giusto');
      else {
        if (!fc.content.slice(di + 9, ri).trim()) E('E6', fc.startLine, 'checkpoint con [domanda] vuota');
        if (!fc.content.slice(ri + 10).trim()) E('E6', fc.startLine, 'checkpoint con [risposta] vuota');
      }
    } else if (JSON_LANGS.has(fc.lang)) {
      let obj;
      try { obj = JSON.parse(fc.content.trim()); } catch (e) { E('E5', fc.startLine, `JSON di ${fc.lang} non valido: ${e.message}`); continue; }
      if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) { E('E5', fc.startLine, `JSON di ${fc.lang} deve essere un oggetto`); continue; }
      if (fc.lang !== 'normalbell') {
        for (const k of OLD_SLIDER_KEYS) if (k in obj) E('E5', fc.startLine, `${fc.lang}: chiave vecchia "${k}" (usare il prefisso p: pname, pmin, pmax, pdefault, pstep)`);
      }
      if (fc.lang === 'slider') for (const k of SLIDER_REQUIRED) if (!(k in obj)) E('E5', fc.startLine, `slider senza "${k}"`);
    }
  }

  // E7
  const declared = new Set(Array.isArray(d.componenti_usati) ? d.componenti_usati : []);
  const missing = [...present].filter(x => !declared.has(x));
  const extra = [...declared].filter(x => !present.has(x));
  if (missing.length || extra.length) {
    E('E7', 1, `componenti_usati diverso dai blocchi presenti (nel corpo ma non dichiarati: [${missing.join(', ')}]; dichiarati ma assenti: [${extra.join(', ')}])`);
  }

  // E8, E9, E10 sulle righe fuori dai code fence
  const idLike = /\$\[([a-z]+-\d{2}-[a-z0-9-]+)\]\$/g;
  for (const { text, line } of outside) {
    for (const m of text.matchAll(idLike)) E('E8', line, `sintassi $[id]$ non supportata: ${m[0]}`);
    if (text.includes('](#')) E('E8', line, 'anchor interno "](#" non supportato');
    if (/\\tag\b/.test(text)) E('E8', line, '\\tag non supportato da KaTeX nel corpo');
    for (const m of text.matchAll(/\]\((\/[^)\s]*)\)/g)) {
      const target = m[1].split('#')[0].split('?')[0].replace(/\/$/, '');
      if (!ctx.urls.has(target)) E('E8', line, `link interno a lezione inesistente: ${m[1]}`);
    }
    const low = text.toLowerCase();
    for (const p of FORBIDDEN) if (low.includes(p)) E('E10', line, `frase vietata: "${p}"`);
  }

  // E9: <details> senza riga vuota dopo </summary>
  for (let i = 0; i < outside.length; i++) {
    const t = outside[i].text;
    if (/<\/summary>\s*$/.test(t) || /<\/summary>.+/.test(t)) {
      const after = t.slice(t.indexOf('</summary>') + 10).trim();
      const next = outside[i + 1];
      if (after) E('E9', outside[i].line, '<details>: testo sulla stessa riga di </summary> (serve riga vuota dopo)');
      else if (next && next.text.trim() !== '') E('E9', outside[i].line, '<details>: manca la riga vuota dopo </summary>');
    }
  }

  // E9: numero dispari di $ non escapati (per blocco di testo separato da riga vuota)
  {
    let para = [];
    const flush = () => {
      if (!para.length) return;
      const joined = para.map(p => p.text).join('\n').replace(/\\\\/g, '').replace(/\\\$/g, '');
      const n = (joined.match(/\$/g) || []).length;
      if (n % 2 === 1) E('E9', para[0].line, 'numero dispari di $ non escapati nel paragrafo');
      para = [];
    };
    for (const row of outside) { if (row.text.trim() === '') flush(); else para.push(row); }
    flush();
  }

  // E4 sezioni + conteggi
  const heads = sectionsOf(outside);
  const sectionText = h => outside.slice(h.idx + 1, h.end).map(r => r.text);
  let esempiSection = null, eserciziSection = null;
  if (v3) {
    const titles = heads.map(h => h.title);
    for (const h of heads) if (!V3_SECTIONS.includes(h.title)) E('E4', h.line, `intestazione non ammessa o non esatta: "## ${h.title}"`);
    for (const r of V3_REQUIRED[d.tipo] || []) if (!titles.includes(r)) E('E4', 1, `sezione obbligatoria mancante: "## ${r}"`);
    let last = -1;
    for (const h of heads) {
      const pos = V3_SECTIONS.indexOf(h.title);
      if (pos === -1) continue;
      if (pos < last) E('E4', h.line, `sezione fuori ordine: "## ${h.title}"`);
      last = Math.max(last, pos);
    }
    esempiSection = heads.find(h => h.title === 'Esempi');
    eserciziSection = heads.find(h => h.title === 'Esercizi');
    for (const h of heads) {
      if (V3_OPTIONAL.has(h.title) && sectionText(h).join('').trim() === '') W('W4', h.line, `sezione facoltativa vuota: "## ${h.title}"`);
    }
  } else {
    const omesse = (Array.isArray(d.sezioni_omesse) ? d.sezioni_omesse : []).map(o => norm(o && o.sezione !== undefined ? o.sezione : o));
    let last = -1;
    for (const h of heads) {
      const pos = LEGACY_SECTIONS.indexOf(h.title);
      if (pos === -1) { E('E4', h.line, `intestazione non ammessa o non esatta: "## ${h.title}"`); continue; }
      if (pos < last) E('E4', h.line, `sezione fuori ordine: "## ${h.title}"`);
      last = Math.max(last, pos);
    }
    LEGACY_SECTIONS.forEach(s => {
      if (heads.some(h => h.title === s)) return;
      const bare = norm(s.replace(/^\d+\.\s*/, ''));
      if (!omesse.some(o => o.includes(bare) || bare.includes(o))) E('E4', 1, `sezione mancante: "## ${s}"`);
    });
    esempiSection = heads.find(h => h.title === '4. Esempi');
    eserciziSection = heads.find(h => h.title === '6. Esercizi');
    for (const h of heads) if (sectionText(h).join('').trim() === '') W('W4', h.line, `sezione vuota: "## ${h.title}"`);
  }

  // conteggi
  if (esempiSection) stats.esempi = countOutsideMatches(outside.slice(esempiSection.idx + 1, esempiSection.end), /^(?:#+\s*|\*\*)Esempio\s+(\d+)/);
  let solNascoste = 0;
  if (eserciziSection) {
    const sec = outside.slice(eserciziSection.idx + 1, eserciziSection.end);
    stats.esercizi = countOutsideMatches(sec, /(?:^#+\s*|\*\*|<summary>)\s*(?:Esercizio\s+|E)(\d+)\b/);
    solNascoste = sec.filter(r => /<details/.test(r.text)).length;
  }

  // W1–W3
  const prof = d.profondita || 'approfondita';
  if (v3 && prof === 'essenziale' && (stats.righe < 120 || stats.righe > 320)) W('W1', 1, `${stats.righe} righe: fuori dall'intervallo Essenziale (120–320)`);
  const q = QUANTITA[prof];
  const outOf = (n, [lo, hi]) => n < lo || n > hi;
  const fmt = ([lo, hi]) => (hi === Infinity ? `≥ ${lo}` : lo === hi ? `${lo}` : `${lo}–${hi}`);
  if (q) {
    if (outOf(stats.esempi, q.esempi)) W('W2', esempiSection?.line || 1, `esempi: ${stats.esempi} (attesi ${fmt(q.esempi)})`);
    if (outOf(stats.esercizi, q.esercizi)) W('W2', eserciziSection?.line || 1, `esercizi: ${stats.esercizi} (attesi ${fmt(q.esercizi)})`);
    if (outOf(stats.checkpoint, q.checkpoint)) W('W2', 1, `checkpoint: ${stats.checkpoint} (attesi ${fmt(q.checkpoint)})`);
    const nf = Array.isArray(d.fonti_integrate) ? d.fonti_integrate.length : 0;
    if (nf < q.fonti) W('W2', 1, `fonti_integrate: ${nf} (attese ≥ ${q.fonti})`);
  }
  if (d.stato === 'completa' && solNascoste === 0) W('W3', eserciziSection?.line || 1, 'stato completa ma nessun esercizio con soluzione nascosta in <details>');

  return { issues, stats };
}

// ── main ─────────────────────────────────────────────────────────────────────
const all = listMd(LESSONS_DIR).map(parseLesson);
const ctx = {
  byId: new Map(all.filter(l => l.data.id).map(l => [l.data.id, l])),
  idCount: new Map(),
  urls: new Set(all.map(l => l.url)),
  catalog: loadCatalogIds(),
};
for (const l of all) if (l.data.id) ctx.idCount.set(l.data.id, (ctx.idCount.get(l.data.id) || 0) + 1);

const results = [];
let skipped = 0;
for (const l of all) {
  if (!l.parseError && !VALIDATED_STATES.has(l.data.stato)) { skipped++; continue; }
  const r = validate(l, ctx);
  results.push({ lesson: l, ...r, errors: r.issues.filter(i => i.level === 'E'), warnings: r.issues.filter(i => i.level === 'W') });
}
const nErr = results.reduce((s, r) => s + r.errors.length, 0);
const nWarn = results.reduce((s, r) => s + r.warnings.length, 0);

if (AS_JSON) {
  console.log(JSON.stringify({
    validate: results.length, skipped, errors: nErr, warnings: nWarn,
    catalogoFonti: ctx.catalog ? 'ok' : 'CATALOGO_FONTI.md non trovato (E3 non verificata)',
    lessons: results.map(r => ({ file: r.lesson.rel, id: r.lesson.data.id, modalita: r.lesson.data.contratto === '3.0' ? 'v3' : 'legacy', stats: r.stats, issues: r.issues })),
  }, null, 2));
} else {
  const shown = ONLY_ERRORS ? results.filter(r => r.errors.length) : results;
  const pad = (s, n) => String(s).padEnd(n);
  const padL = (s, n) => String(s).padStart(n);
  console.log(`${pad('Lezione', 42)} ${padL('righe', 5)} ${padL('chk', 3)} ${padL('esem', 4)} ${padL('eserc', 5)} ${padL('err', 3)} ${padL('avv', 3)}`);
  console.log('-'.repeat(70));
  for (const r of shown) {
    const name = r.lesson.rel.replace('src/lessons/', '');
    console.log(`${pad(name.length > 42 ? '…' + name.slice(-41) : name, 42)} ${padL(r.stats.righe, 5)} ${padL(r.stats.checkpoint, 3)} ${padL(r.stats.esempi, 4)} ${padL(r.stats.esercizi, 5)} ${padL(r.errors.length, 3)} ${padL(r.warnings.length, 3)}`);
  }
  console.log('-'.repeat(70));
  const detail = shown.flatMap(r => r.issues.filter(i => !ONLY_ERRORS || i.level === 'E').map(i => ({ r, i })));
  if (detail.length) {
    console.log('\nDettaglio:');
    for (const { r, i } of detail) console.log(`  ${i.level === 'E' ? 'ERRORE' : 'avviso'} ${i.rule}  ${r.lesson.rel}:${i.line}  ${i.msg}`);
  }
  if (!ctx.catalog) console.log('\nATTENZIONE: CATALOGO_FONTI.md non trovato, regola E3 non verificata.');
  console.log(`\nValidate: ${results.length} · saltate (da-rielaborare/bozza): ${skipped} · errori: ${nErr} · avvisi: ${nWarn}`);
}
process.exit(nErr > 0 ? 1 : 0);
