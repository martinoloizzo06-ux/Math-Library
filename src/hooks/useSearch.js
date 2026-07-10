import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

export function useSearch(allLessons, subjects) {
  const [query, setQuery] = useState('');

  const subjectMap = useMemo(() => {
    const m = {};
    for (const s of subjects) m[s.id] = s;
    return m;
  }, [subjects]);

  const corpus = useMemo(() =>
    allLessons.map(l => ({
      ...l,
      subject_label_it: subjectMap[l.subject]?.label_it ?? '',
      subject_label_en: subjectMap[l.subject]?.label_en ?? '',
    })),
    [allLessons, subjectMap],
  );

  const fuse = useMemo(() => new Fuse(corpus, {
    keys: [
      { name: 'title_it',         weight: 3 },
      { name: 'title_en',         weight: 3 },
      { name: 'topic_it',         weight: 2 },
      { name: 'topic_en',         weight: 2 },
      { name: 'subject_label_it', weight: 1 },
      { name: 'subject_label_en', weight: 1 },
      { name: 'content',          weight: 0.3 },
    ],
    threshold: 0.35,
    includeScore: true,
    minMatchCharLength: 2,
  }), [corpus]);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    return fuse.search(q).slice(0, 10);
  }, [query, fuse]);

  return { query, setQuery, results };
}
