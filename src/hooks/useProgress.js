import { useState } from 'react';

const KEY = 'matbib-progress';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
}

export function useProgress() {
  const [progress, setProgress] = useState(load);

  function update(fn) {
    setProgress(p => {
      const next = fn(p);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }

  const markRead = id =>
    update(p => ({ ...p, [id]: { ...p[id], read: true } }));

  const toggleBookmark = id =>
    update(p => ({ ...p, [id]: { ...p[id], bookmarked: !p[id]?.bookmarked } }));

  const isRead = id => !!progress[id]?.read;
  const isBookmarked = id => !!progress[id]?.bookmarked;

  const subjectProgress = (subjectId, allLessons) => {
    const lessons = allLessons.filter(l => l.subject === subjectId);
    if (!lessons.length) return 0;
    return Math.round((lessons.filter(l => isRead(l.id)).length / lessons.length) * 100);
  };

  return { markRead, toggleBookmark, isRead, isBookmarked, subjectProgress };
}
