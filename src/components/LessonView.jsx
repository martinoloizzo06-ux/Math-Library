import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import Breadcrumb from './Breadcrumb.jsx';
import MathPlot from './visual/MathPlot.jsx';
import FunctionSlider from './visual/FunctionSlider.jsx';
import NormalBell from './visual/NormalBell.jsx';
import Checkpoint from './Checkpoint.jsx';

const VISUAL = { plot: MathPlot, slider: FunctionSlider, normalbell: NormalBell };

function CustomPre({ children, ...props }) {
  const child = React.Children.toArray(children)[0];
  if (child?.props) {
    const { className, children: code } = child.props;
    const match = /language-(\w+)/.exec(className || '');
    if (match) {
      if (match[1] === 'checkpoint') {
        return <Checkpoint source={String(code)} />;
      }
      const Comp = VISUAL[match[1]];
      if (Comp) {
        try {
          return <Comp {...JSON.parse(String(code).trim())} />;
        } catch { /* JSON non valido → blocco codice normale */ }
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

// ── Badge livello ──────────────────────────────────────────────────────────────

const LIVELLO_LABEL = {
  intro:         { it: 'Intro',         en: 'Intro',       cls: 'badge--green'  },
  universitario: { it: 'Universitario', en: 'University',  cls: 'badge--blue'   },
  avanzato:      { it: 'Avanzato',      en: 'Advanced',    cls: 'badge--purple' },
  phd:           { it: 'PhD',           en: 'PhD',         cls: 'badge--purple' },
};

const STATO_LABEL = {
  completa:         { it: 'Completa',         en: 'Complete',      cls: 'badge--stato-ok'  },
  bozza:            { it: 'Bozza',            en: 'Draft',         cls: 'badge--stato-bozza' },
  'da-rielaborare': { it: 'Da rielaborare',   en: 'To revise',     cls: 'badge--stato-warn' },
  'da-rivedere':    { it: 'Da rivedere',      en: 'To review',     cls: 'badge--stato-warn' },
};

// ── Box prerequisiti ───────────────────────────────────────────────────────────

function PrerequisitiBadge({ ids, lessonById, lang }) {
  if (!ids || ids.length === 0) return null;

  return (
    <div className="kb-prerequisiti">
      <span className="kb-prerequisiti__label">
        {lang === 'it' ? 'Prerequisiti:' : 'Prerequisites:'}
      </span>
      <ul className="kb-prerequisiti__list">
        {ids.map(pid => {
          const target = lessonById?.[pid];
          if (!target) {
            return (
              <li key={pid} className="kb-prereq-item kb-prereq-item--missing">
                <span title={`ID: ${pid}`}>⚠ {pid}</span>
              </li>
            );
          }
          const label = lang === 'it' ? (target.title_it || target.titolo) : (target.title_en || target.title_it || target.titolo);
          const url = `/${target.subject || target.materia}/${target.topicSlug}/${target.lessonSlug}`;
          return (
            <li key={pid} className="kb-prereq-item">
              <a href={url} className="kb-prereq-link">{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ── Componente principale ──────────────────────────────────────────────────────

export default function LessonView({
  lesson, subject, topic, lang, progress, lessonById,
  onBackToLessons, onBackToTopics, onBackToSubjects,
}) {
  const subjectLabel = lang === 'it' ? subject.label_it : subject.label_en;
  const topicLabel   = lang === 'it' ? topic.topic_it   : topic.topic_en;
  const title        = lang === 'it' ? lesson.title_it  : (lesson.title_en || lesson.title_it);
  const read         = progress.isRead(lesson.id);
  const bookmarked   = progress.isBookmarked(lesson.id);

  const livello = lesson.livello ?? null;
  const stato   = lesson.stato   ?? null;
  const prereqs = Array.isArray(lesson.prerequisiti) ? lesson.prerequisiti : [];

  const livelloCfg = livello ? LIVELLO_LABEL[livello] : null;
  const statoCfg   = stato   ? STATO_LABEL[stato]     : null;

  return (
    <div className="page-wrap lesson-wrap">
      <Breadcrumb items={[
        { label: lang === 'it' ? 'Materie' : 'Subjects', onClick: onBackToSubjects },
        { label: subjectLabel, onClick: onBackToTopics },
        { label: topicLabel,   onClick: onBackToLessons },
        { label: title },
      ]} />

      <div className="lesson-header">
        <div className="lesson-header__top">
          <h1 className="lesson-title">{title}</h1>
          <div className="lesson-badges">
            {livelloCfg && (
              <span className={`kb-badge ${livelloCfg.cls}`}>
                {lang === 'it' ? livelloCfg.it : livelloCfg.en}
              </span>
            )}
            {statoCfg && (
              <span className={`kb-badge ${statoCfg.cls}`}>
                {lang === 'it' ? statoCfg.it : statoCfg.en}
              </span>
            )}
          </div>
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

      <PrerequisitiBadge ids={prereqs} lessonById={lessonById} lang={lang} />

      <article className="lesson-content">
        <ReactMarkdown {...MD_PLUGINS}>{lesson.content}</ReactMarkdown>
      </article>

      {/* Punto di integrazione AI tutor — disabilitato */}
      {/* <AiTutor lesson={lesson} lang={lang} /> */}
    </div>
  );
}
