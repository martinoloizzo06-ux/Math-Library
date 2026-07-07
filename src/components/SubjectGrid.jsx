import React from 'react';

const LEVEL_LABELS = {
  green:  { it: 'Superiori',           en: 'High School' },
  blue:   { it: 'Università',          en: 'University'  },
  purple: { it: 'Università avanzata', en: 'Advanced'    },
};

export default function SubjectGrid({ subjects, lang, onSelect, progress, allLessons }) {
  return (
    <div className="page-wrap">
      <div className="hero">
        <h1 className="hero-title">
          {lang === 'it' ? 'Biblioteca di Matematica' : 'Mathematics Library'}
        </h1>
        <p className="hero-sub">
          {lang === 'it'
            ? 'Dalle scuole superiori fino a statistica, econometria e finanza applicata.'
            : 'From high school to statistics, econometrics and applied finance.'}
        </p>
      </div>

      <div className="subject-grid">
        {subjects.map(s => {
          const label = lang === 'it' ? s.label_it : s.label_en;
          const levelLabel = LEVEL_LABELS[s.level]?.[lang] ?? '';
          const pct = progress.subjectProgress(s.id, allLessons);

          return (
            <button
              key={s.id}
              className={`subject-card subject-card--${s.level}`}
              onClick={() => s.lessonCount > 0 && onSelect(s)}
              disabled={s.lessonCount === 0}
            >
              <span className="subject-card-emoji">{s.emoji}</span>
              <span className={`level-badge level-badge--${s.level}`}>{levelLabel}</span>
              <h2 className="subject-card-title">{label}</h2>
              <p className="subject-card-count">
                {s.lessonCount > 0
                  ? `${s.lessonCount} ${lang === 'it' ? 'lezioni' : 'lessons'}`
                  : (lang === 'it' ? 'In arrivo' : 'Coming soon')}
              </p>
              {pct > 0 && (
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
