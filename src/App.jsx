import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage.js';
import { useProgress } from './hooks/useProgress.js';
import { loadLessons } from './utils/lessonLoader.js';
import Header from './components/Header.jsx';
import SubjectGrid from './components/SubjectGrid.jsx';
import TopicList from './components/TopicList.jsx';
import LessonList from './components/LessonList.jsx';
import LessonView from './components/LessonView.jsx';

const { subjects, allLessons } = loadLessons();

// ── Page components ─────────────────────────────────────────

function SubjectsPage({ lang, progress }) {
  const navigate = useNavigate();
  return (
    <SubjectGrid
      subjects={subjects}
      lang={lang}
      progress={progress}
      allLessons={allLessons}
      onSelect={s => navigate(`/${s.id}`)}
    />
  );
}

function TopicsPage({ lang }) {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) return <Navigate to="/" replace />;
  return (
    <TopicList
      subject={subject}
      lang={lang}
      onSelectTopic={t => navigate(`/${subjectId}/${t.topicSlug}`)}
      onBack={() => navigate('/')}
    />
  );
}

function LessonsPage({ lang, progress }) {
  const { subjectId, topicSlug } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find(s => s.id === subjectId);
  const topic   = subject?.topics.find(t => t.topicSlug === topicSlug);
  if (!subject || !topic) return <Navigate to={`/${subjectId ?? ''}`} replace />;
  return (
    <LessonList
      subject={subject}
      topic={topic}
      lang={lang}
      progress={progress}
      onSelectLesson={l => navigate(`/${subjectId}/${topicSlug}/${l.lessonSlug}`)}
      onBackToTopics={() => navigate(`/${subjectId}`)}
      onBackToSubjects={() => navigate('/')}
    />
  );
}

function LessonPage({ lang, progress }) {
  const { subjectId, topicSlug, lessonSlug } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find(s => s.id === subjectId);
  const topic   = subject?.topics.find(t => t.topicSlug === topicSlug);
  const lesson  = allLessons.find(l => l.lessonSlug === lessonSlug && l.subject === subjectId);
  if (!subject || !topic || !lesson) return <Navigate to="/" replace />;
  return (
    <LessonView
      lesson={lesson}
      subject={subject}
      topic={topic}
      lang={lang}
      progress={progress}
      onBackToLessons={() => navigate(`/${subjectId}/${topicSlug}`)}
      onBackToTopics={() => navigate(`/${subjectId}`)}
      onBackToSubjects={() => navigate('/')}
    />
  );
}

// ── Root App ────────────────────────────────────────────────

export default function App() {
  const { lang, toggle: toggleLang } = useLanguage();
  const progress = useProgress();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('matbib-dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('matbib-dark', darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <Header
        lang={lang}
        onToggleLang={toggleLang}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        onHome={() => navigate('/')}
        allLessons={allLessons}
        subjects={subjects}
      />
      <main className="main">
        <Routes>
          <Route path="/"                              element={<SubjectsPage lang={lang} progress={progress} />} />
          <Route path="/:subjectId"                    element={<TopicsPage   lang={lang} />} />
          <Route path="/:subjectId/:topicSlug"         element={<LessonsPage  lang={lang} progress={progress} />} />
          <Route path="/:subjectId/:topicSlug/:lessonSlug" element={<LessonPage lang={lang} progress={progress} />} />
          <Route path="*"                              element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
