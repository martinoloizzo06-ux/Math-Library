import React from 'react';
import Breadcrumb from './Breadcrumb.jsx';

export default function TopicList({ subject, lang, onSelectTopic, onBack }) {
  const label = lang === 'it' ? subject.label_it : subject.label_en;

  return (
    <div className="page-wrap">
      <Breadcrumb items={[
        { label: lang === 'it' ? 'Materie' : 'Subjects', onClick: onBack },
        { label },
      ]} />
      <h1 className="page-title">{label}</h1>

      <div className="list-stack">
        {subject.topics.map(topic => {
          const topicLabel = lang === 'it' ? topic.topic_it : topic.topic_en;
          return (
            <button
              key={topic.topic_it}
              className="list-item"
              onClick={() => onSelectTopic(topic)}
            >
              <span className="list-item-title">{topicLabel}</span>
              <span className="list-item-meta">
                {topic.lessons.length} {lang === 'it' ? 'lezioni' : 'lessons'}
              </span>
              <span className="list-item-arrow">›</span>
            </button>
          );
        })}
        {subject.topics.length === 0 && (
          <p className="empty-state">
            {lang === 'it' ? 'Lezioni in preparazione.' : 'Lessons coming soon.'}
          </p>
        )}
      </div>
    </div>
  );
}
