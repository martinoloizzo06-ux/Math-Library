import React from 'react';
import Breadcrumb from './Breadcrumb.jsx';

export default function LessonList({ subject, topic, lang, onSelectLesson, onBackToTopics, onBackToSubjects, progress }) {
  const subjectLabel = lang === 'it' ? subject.label_it : subject.label_en;
  const topicLabel   = lang === 'it' ? topic.topic_it   : topic.topic_en;

  return (
    <div className="page-wrap">
      <Breadcrumb items={[
        { label: lang === 'it' ? 'Materie' : 'Subjects', onClick: onBackToSubjects },
        { label: subjectLabel, onClick: onBackToTopics },
        { label: topicLabel },
      ]} />
      <h1 className="page-title">{topicLabel}</h1>

      <div className="list-stack">
        {topic.lessons.map(lesson => {
          const title = lang === 'it' ? lesson.title_it : (lesson.title_en || lesson.title_it);
          const read = progress.isRead(lesson.id);
          const bookmarked = progress.isBookmarked(lesson.id);
          return (
            <button
              key={lesson.id}
              className={`list-item ${read ? 'list-item--read' : ''}`}
              onClick={() => onSelectLesson(lesson)}
            >
              <span className={`lesson-dot lesson-dot--${lesson.level || 'green'}`} />
              <span className="list-item-title">{title}</span>
              <div className="list-item-badges">
                {bookmarked && <span className="badge" title="Segnalibro">🔖</span>}
                {read       && <span className="badge badge--read" title="Letta">✓</span>}
              </div>
              <span className="list-item-arrow">›</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
