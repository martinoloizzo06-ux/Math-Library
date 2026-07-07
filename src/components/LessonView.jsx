import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import Breadcrumb from './Breadcrumb.jsx';

const MD_PLUGINS = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex, rehypeRaw],
};

export default function LessonView({
  lesson, subject, topic, lang, progress,
  onBackToLessons, onBackToTopics, onBackToSubjects,
}) {
  const subjectLabel = lang === 'it' ? subject.label_it : subject.label_en;
  const topicLabel   = lang === 'it' ? topic.topic_it   : topic.topic_en;
  const title        = lang === 'it' ? lesson.title_it  : (lesson.title_en || lesson.title_it);
  const read         = progress.isRead(lesson.id);
  const bookmarked   = progress.isBookmarked(lesson.id);

  return (
    <div className="page-wrap lesson-wrap">
      <Breadcrumb items={[
        { label: lang === 'it' ? 'Materie' : 'Subjects', onClick: onBackToSubjects },
        { label: subjectLabel, onClick: onBackToTopics },
        { label: topicLabel,   onClick: onBackToLessons },
        { label: title },
      ]} />

      <div className="lesson-header">
        <h1 className="lesson-title">{title}</h1>

        <div className="lesson-source">
          <span className="lesson-source-label">{lang === 'it' ? 'Fonte:' : 'Source:'}</span>
          {' '}<em>{lesson.source_book}</em>
          {lesson.source_chapter && <> — {lesson.source_chapter}</>}
        </div>

        <div className="lesson-actions">
          <button
            className={`btn-action ${read ? 'btn-action--done' : ''}`}
            onClick={() => progress.markRead(lesson.id)}
          >
            {read
              ? (lang === 'it' ? '✓ Letta' : '✓ Read')
              : (lang === 'it' ? 'Segna come letta' : 'Mark as read')}
          </button>
          <button
            className={`btn-action ${bookmarked ? 'btn-action--done' : ''}`}
            onClick={() => progress.toggleBookmark(lesson.id)}
          >
            {bookmarked
              ? (lang === 'it' ? '🔖 Salvata' : '🔖 Saved')
              : (lang === 'it' ? 'Aggiungi segnalibro' : 'Bookmark')}
          </button>
        </div>
      </div>

      <article className="lesson-content">
        <ReactMarkdown {...MD_PLUGINS}>{lesson.content}</ReactMarkdown>
      </article>

      {/* Punto di integrazione AI tutor — disabilitato */}
      {/* <AiTutor lesson={lesson} lang={lang} /> */}
    </div>
  );
}
