// Validatore delle lezioni — regole E1–E10 e W1–W4 di CONTRATTO_V3.md §7.
// Uso (da math-library):  npm run validate [-- --json] [-- --only-errors]
// Lezioni con `contratto: "3.0"` -> regole v3; senza `contratto` -> regole legacy v2.1.
// Si validano solo le lezioni `completa` e `da-rivedere`; le altre sono contate e saltate.
// E11: ogni formula (inline e display) deve passare katex.renderToString con throwOnError.
// W1 conta le righe del corpo (frontmatter escluso), non del file.
// E12/W5: i file compagni `NN-slug.approfondimento.md` / `NN-slug.essenziale.md` seguono le regole di CONTRATTO_V3.md §2–§3
// (legame con la lezione base in una sola direzione: dal compagno alla base). I compagni non sono lezioni navigabili.
// Opzione `--lessons-dir <cartella>`: valida una cartella di prova invece di src/lessons.
// Il validatore NON corregge nulla e NON giudica il contenuto matematico.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { load as yamlLoad } from 'js-yaml';
import katex from 'katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CATALOGO = path.resolve(ROOT, '..', 'CATALOGO_FONTI.md');

const argv = process.argv.slice(2);
const dirIdx = argv.findIndex(a => a === '--lessons-dir' || a.startsWith('--lessons-dir='));
const dirArg = dirIdx === -1 ? null : (argv[dirIdx].includes('=') ? argv[dirIdx].split('=').slice(1).join('=') : argv[dirIdx + 1]);
if (dirIdx !== -1 && !dirArg) { console.error('--lessons-dir richiede una cartella'); process.exit(2); }
const LESSONS_DIR = dirArg ? path.resolve(dirArg) : path.join(ROOT, 'src', 'lessons');

const args = new Set(argv);
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

// File compagni (CONTRATTO_V3 §2): stesso riconoscimento per nome del loader.
const COMPANION_RE = /\.(approfondimento|essenziale)\.md$/;
const bodyLines = s => s.replace(/\n+$/, '').split('\n').length;

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
  const companion = COMPANION_RE.exec(path.basename(file));
  const lesson = { file, rel, raw, data: {}, body: '', bodyStartLine: 1, parseError: null, lessonSlug: path.basename(file, '.md'), companion: companion ? companion[1] : null };
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

// ── formule: estrazione esatta dai nodi math/inlineMath (non regex) ──────────
const mdParser = unified().use(remarkParse).use(remarkMath).use(remarkGfm);

function collectMath(node, out) {
  if ((node.type === 'math' || node.type === 'inlineMath') && node.position) {
    out.push({ value: node.value, display: node.type === 'math', line: node.position.start.line });
  }
  if (node.children) for (const c of node.children) collectMath(c, out);
  return out;
}

function checkFormulas(body, bodyStartLine, E) {
  const tree = mdParser.parse(body);
  for (const f of collectMath(tree, [])) {
    try {
      katex.renderToString(f.value, { throwOnError: true, displayMode: f.display, strict: 'ignore' });
    } catch (e) {
      const excerpt = f.value.replace(/\s+/g, ' ').trim();
      E('E11', bodyStartLine + f.line - 1, `formula non renderizzabile da KaTeX: «${excerpt.length > 80 ? excerpt.slice(0, 77) + '...' : excerpt}» — ${String(e.message).replace(/^KaTeX parse error: /, '')}`);
    }
  }
}

// ── validazione di una lezione ───────────────────────────────────────────────
function validate(lesson, ctx) {
  const issues = [];
  const E = (rule, line, msg) => issues.push({ level: 'E', rule, line: line || 1, msg });
  const W = (rule, line, msg) => issues.push({ level: 'W', rule, line: line || 1, msg });
  const d = lesson.data;
  // righeCorpo = righe dopo il frontmatter (senza newline finale): è la misura usata da W1.
  const stats = { righe: lesson.raw.split('\n').length, righeCorpo: lesson.body.replace(/\n+$/, '').split('\n').length, checkpoint: 0, esempi: 0, esercizi: 0 };

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
      else if (ctx.byId.get(id).companion) E('E12', 1, `${field}: "${id}" è un file compagno, non una lezione navigabile (indicare l'id della lezione base)`);
    }
  }
  for (const field of ['estende', 'approfondimento']) {
    if (d[field] && !ctx.byId.has(d[field])) E('E2', 1, `${field}: id inesistente "${d[field]}"`);
  }

  // E12 / W5: file compagni (CONTRATTO_V3 §2–§3). Il legame va dal compagno alla base, in una sola direzione.
  if (lesson.companion) {
    const kind = lesson.companion;
    const linkField = kind === 'approfondimento' ? 'estende' : 'approfondimento';
    const otherField = kind === 'approfondimento' ? 'approfondimento' : 'estende';
    const wantProf = kind === 'approfondimento' ? 'approfondita' : 'essenziale';
    const suffix = `.${kind}.md`;
    const target = d[linkField];
    const base = target ? ctx.byId.get(target) : null;
    if (!target) E('E12', 1, `file .${kind}.md senza il campo "${linkField}" (id della lezione base)`);
    if (d[otherField]) E('E12', 1, `file .${kind}.md con il campo "${otherField}", che spetta all'altro tipo di compagno`);
    if (target && base && base.companion) E('E12', 1, `${linkField}: "${target}" è a sua volta un file compagno`);
    if (target && d.id !== `${target}-${kind}`) E('E12', 1, `id del compagno deve essere "${target}-${kind}" (trovato "${d.id}")`);
    if (d.contratto !== '3.0') E('E12', 1, 'compagno senza contratto: "3.0"');
    if (d.profondita !== wantProf) E('E12', 1, `profondita del compagno .${kind}.md deve essere "${wantProf}" (trovato "${d.profondita}")`);
    if (base && !base.companion) {
      const expectedFile = path.join(path.dirname(lesson.file), path.basename(lesson.file).slice(0, -suffix.length) + '.md');
      if (path.resolve(base.file) !== expectedFile) E('E12', 1, `nome file: il compagno di ${path.relative(path.dirname(lesson.file), base.file)} deve chiamarsi ${path.basename(base.file, '.md')}${suffix} nella stessa cartella`);
      const baseProf = base.data.profondita || 'approfondita';
      const wantBase = kind === 'approfondimento' ? 'essenziale' : 'approfondita';
      const baseLevelOk = baseProf === wantBase;
      if (!baseLevelOk) E('E12', 1, `la lezione base "${target}" ha profondita "${baseProf}": un compagno .${kind}.md richiede una base "${wantBase}" (altrimenti il loader lo scarta)`);
      for (const [f, label] of [['materia', 'materia'], ['argomento', 'argomento']]) {
        if (d[f] !== base.data[f]) E('E12', 1, `${label} del compagno ("${d[f]}") diversa da quella della base ("${base.data[f]}")`);
      }
      // W5: l'Approfondimento non dovrebbe essere più corto dell'Essenziale; tipo coerente con la base.
      const bodyOf = l => bodyLines(l.body);
      const approf = kind === 'approfondimento' ? lesson : base;
      const essen = kind === 'approfondimento' ? base : lesson;
      if (baseLevelOk && bodyOf(approf) < bodyOf(essen)) W('W5', 1, `corpo dell'Approfondimento (${bodyOf(approf)} righe) più corto di quello dell'Essenziale (${bodyOf(essen)})`);
      if (d.tipo && base.data.tipo && d.tipo !== base.data.tipo) W('W5', 1, `tipo "${d.tipo}" diverso da quello della base ("${base.data.tipo}")`);
    }
    const group = ctx.companionGroups.get(`${target}|${kind}`) || [];
    if (target && group.length > 1) E('E12', 1, `più compagni .${kind}.md per la stessa base "${target}": ${group.map(l => path.relative(LESSONS_DIR, l.file)).join(', ')}`);
  } else {
    for (const f of ['estende', 'approfondimento']) {
      if (d[f]) E('E12', 1, `campo "${f}" in un file che non è un compagno: spetta solo ai file .approfondimento.md / .essenziale.md`);
    }
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
      if (ctx.companionUrls.has(target)) E('E8', line, `link a un file compagno: ${m[1]} (il livello si sceglie con ?livello=essenziale|approfondimento sull'URL della lezione base)`);
      else if (!ctx.urls.has(target)) E('E8', line, `link interno a lezione inesistente: ${m[1]}`);
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

  // E11 formule KaTeX
  checkFormulas(lesson.body, lesson.bodyStartLine, E);

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
  // W1: righe del CORPO (frontmatter escluso). Essenziale 120–320; Approfondimento solo il minimo (150).
  if (v3 && prof === 'essenziale' && (stats.righeCorpo < 120 || stats.righeCorpo > 320)) W('W1', 1, `${stats.righeCorpo} righe di corpo: fuori dall'intervallo Essenziale (120–320)`);
  if (prof === 'approfondita' && stats.righeCorpo < 150) W('W1', 1, `${stats.righeCorpo} righe di corpo: sotto il minimo Approfondimento (150)`);
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
  // Solo le lezioni base sono pagine navigabili; i compagni vivono sull'URL della base.
  urls: new Set(all.filter(l => !l.companion).map(l => l.url)),
  companionUrls: new Set(all.filter(l => l.companion).map(l => l.url)),
  companionGroups: new Map(),
  catalog: loadCatalogIds(),
};
for (const l of all) {
  if (!l.companion) continue;
  const target = l.data[l.companion === 'approfondimento' ? 'estende' : 'approfondimento'];
  if (!target) continue;
  const key = `${target}|${l.companion}`;
  ctx.companionGroups.set(key, [...(ctx.companionGroups.get(key) || []), l]);
}
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
  console.log(`${pad('Lezione', 42)} ${padL('corpo', 5)} ${padL('chk', 3)} ${padL('esem', 4)} ${padL('eserc', 5)} ${padL('err', 3)} ${padL('avv', 3)}`);
  console.log('-'.repeat(70));
  for (const r of shown) {
    const name = path.relative(LESSONS_DIR, r.lesson.file);
    console.log(`${pad(name.length > 42 ? '…' + name.slice(-41) : name, 42)} ${padL(r.stats.righeCorpo, 5)} ${padL(r.stats.checkpoint, 3)} ${padL(r.stats.esempi, 4)} ${padL(r.stats.esercizi, 5)} ${padL(r.errors.length, 3)} ${padL(r.warnings.length, 3)}`);
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
