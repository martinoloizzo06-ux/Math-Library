// Aggiorna gli stati e i conteggi di INVENTARIO_LEZIONI.md leggendo i file reali.
// Uso: node scripts/update-inventario.mjs   (dalla cartella math-library)
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const LESSONS = 'src/lessons';
const INV = path.resolve('..', 'INVENTARIO_LEZIONI.md');
const ICON = { 'completa': '✅ completa', 'da-rivedere': '◐ da-rivedere', 'da-rielaborare': '☐ da-rielaborare' };
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

const byTitle = new Map();
for (const d of fs.readdirSync(LESSONS)) {
  for (const f of fs.readdirSync(path.join(LESSONS, d))) {
    if (!f.endsWith('.md')) continue;
    const { data } = matter(fs.readFileSync(path.join(LESSONS, d, f), 'utf8'));
    const t = data.titolo || data.title_it;
    if (t) byTitle.set(norm(t), data.stato || 'da-rielaborare');
  }
}

// Titoli leggermente diversi tra inventario e lezione: accetta una corrispondenza univoca sulle prime 3 parole.
const fuzzy = n => {
  const head = n.split(' ').slice(0, 3).join(' ');
  const hits = [...byTitle].filter(([k]) => k.startsWith(head));
  return hits.length === 1 ? hits[0][1] : undefined;
};

const lines = fs.readFileSync(INV, 'utf8').split('\n');
const counts = { 'completa': 0, 'da-rivedere': 0, 'da-rielaborare': 0 };
const unmatched = [];
const out = lines.map(line => {
  const m = line.match(/^\| `(\d\.\d\.\d\d)` \| (.+?) \| .+ \|$/);
  if (!m) return line;
  const stato = byTitle.get(norm(m[2])) ?? fuzzy(norm(m[2]));
  if (!stato || !ICON[stato]) { unmatched.push(m[1] + ' ' + m[2]); return line; }
  counts[stato]++;
  return `| \`${m[1]}\` | ${m[2]} | ${ICON[stato]} |`;
});

const total = counts.completa + counts['da-rivedere'] + counts['da-rielaborare'];
const today = new Date().toISOString().slice(0, 10);
const text = out.join('\n')
  .replace(/^\*\*Totale: .*$/m, `**Totale: ${total} lezioni** — ✅ completa: ${counts.completa} · ◐ da-rivedere: ${counts['da-rivedere']} · ☐ da-rielaborare: ${counts['da-rielaborare']}`)
  .replace(/^> Aggiornata: .*$/m, `> Aggiornata: ${today}.`);
fs.writeFileSync(INV, text);
console.log(counts, 'totale', total);
if (unmatched.length) console.log('Senza corrispondenza:', unmatched);
