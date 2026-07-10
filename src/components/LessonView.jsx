import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import Breadcrumb from './Breadcrumb.jsx';
import MathPlot from './visual/MathPlot.jsx';
import FunctionSlider from './visual/FunctionSlider.jsx';
import NormalBell from './visual/NormalBell.jsx';

// Mappa "linguaggio del blocco codice" → componente React da renderizzare
const VISUAL = { plot: MathPlot, slider: FunctionSlider, normalbell: NormalBell };

// Il componente <pre> intercetta i blocchi ```plot / ```slider / ```normalbell
function CustomPre({ children, ...props }) {
  const child = React.Children.toArray(children)[0];
  if (child?.props) {
    const { className, children: code } = child.props;
    const match = /language-(\w+)/.exec(className || '');
    if (match) {
      const Comp = VISUAL[match[1]];
      if (Comp) {
        try {
          return <Comp {...JSON.parse(String(code).trim())} />;
        } catch { /* JSON non valido → mostra il blocco di codice normale */ }
      }
    }
  }
  return <pre {...props}>{children}</pre>;
}

const MD_PLUGINS = {
  remarkPlugins: [remarkMath, remarkGfm],
  rehypePlugins: [rehypeKatex, rehypeRaw],
  components: { pre: CustomPre },
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
