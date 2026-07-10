import { parseFrontmatter } from './frontmatter.js';

export const SUBJECTS_META = [
  { id: 'base',           label_it: 'Matematica di base',      label_en: 'Basic Mathematics',     level: 'green',  emoji: '📐', order: 1 },
  { id: 'analisi',        label_it: 'Analisi',                 label_en: 'Calculus',              level: 'blue',   emoji: '∫',  order: 2 },
  { id: 'algebra-lineare',label_it: 'Algebra lineare',         label_en: 'Linear Algebra',        level: 'blue',   emoji: '⊗',  order: 3 },
  { id: 'probabilita',    label_it: 'Probabilità',       label_en: 'Probability',           level: 'blue',   emoji: '🎲', order: 4 },
  { id: 'statistica',     label_it: 'Statistica e inferenza',  label_en: 'Statistics & Inference',level: 'purple', emoji: '📊', order: 5 },
  { id: 'econometria',    label_it: 'Econometria',             label_en: 'Econometrics',          level: 'purple', emoji: '📈', order: 6 },
  { id: 'finanza',        label_it: 'Finanza applicata',       label_en: 'Applied Finance',       level: 'purple', emoji: '💹', order: 7 },
];

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function loadLessons() {
  const rawModules = import.meta.glob('../lessons/**/*.md', { query: '?raw', import: 'default', eager: true });

  const allLessons = [];
  for (const [path, raw] of Object.entries(rawModules)) {
    const { data, content } = parseFrontmatter(raw);
    if (data.id) {
      const lessonSlug = path.split('/').pop().replace(/\.md$/, '');
      const topicSlug  = slugify(data.topic_it || 'generale');
      allLessons.push({ ...data, content, lessonSlug, topicSlug });
    }
  }
  allLessons.sort((a, b) => (a.order || 0) - (b.order || 0));

  // Indice id → lezione per la risoluzione dei prerequisiti
  const lessonById = {};
  for (const lesson of allLessons) {
    if (lesson.id) lessonById[lesson.id] = lesson;
  }

  const bySubject = {};
  for (const lesson of allLessons) {
    const sid = lesson.subject;
    if (!bySubject[sid]) bySubject[sid] = {};
    const topicKey = lesson.topic_it || 'Generale';
    if (!bySubject[sid][topicKey]) {
      bySubject[sid][topicKey] = { topic_en: lesson.topic_en || topicKey, topicSlug: lesson.topicSlug, lessons: [] };
    }
    bySubject[sid][topicKey].lessons.push(lesson);
  }

  const subjects = SUBJECTS_META.map(meta => {
    const topicsMap = bySubject[meta.id] || {};
    const topics = Object.entries(topicsMap).map(([topic_it, { topic_en, topicSlug, lessons }]) => ({
      topic_it,
      topic_en,
      topicSlug,
      lessons: lessons.sort((a, b) => (a.order || 0) - (b.order || 0)),
    }));
    const lessonCount = topics.reduce((s, t) => s + t.lessons.length, 0);
    return { ...meta, topics, lessonCount };
  });

  // Raccoglie prerequisiti non risolti (id referenziato ma lezione inesistente)
  const segnalazioni = [];
  for (const lesson of allLessons) {
    const prereqs = Array.isArray(lesson.prerequisiti) ? lesson.prerequisiti : [];
    for (const pid of prereqs) {
      if (!lessonById[pid]) {
        segnalazioni.push({ tipo: 'prerequisito-non-trovato', lezione: lesson.id, id_mancante: pid });
      }
    }
  }
  if (segnalazioni.length > 0 && import.meta.env.DEV) {
    console.warn('[KB] Prerequisiti non risolti:', segnalazioni);
  }

  return { subjects, allLessons, lessonById, segnalazioni };
}