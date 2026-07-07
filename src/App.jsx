import React, { useState, useEffect } from 'react';
import { useLanguage } from './hooks/useLanguage.js';
import { useProgress } from './hooks/useProgress.js';
import { loadLessons } from './utils/lessonLoader.js';
import Header from './components/Header.jsx';
import SubjectGrid from './components/SubjectGrid.jsx';
import TopicList from './components/TopicList.jsx';
import LessonList from './components/LessonList.jsx';
import LessonView from './components/LessonView.jsx';

const { subjects, allLessons } = loadLessons();

export default function App() {
  const { lang, toggle: toggleLang } = useLanguage();
  const progress = useProgress();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('matbib-dark');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('matbib-dark', darkMode);
  }, [darkMode]);

  const [nav, setNav] = useState({ view: 'subjects' });

  const currentSubject = nav.subjectId ? subjects.find(s => s.id === nav.subjectId) : null;
  const currentTopic   = nav.topicIt && currentSubject
    ? currentSubject.topics.find(t => t.topic_it === nav.topicIt)
    : null;
  const currentLesson  = nav.lessonId ? allLessons.find(l => l.id === nav.lessonId) : null;

  const goSubjects = ()                   => setNav({ view: 'subjects' });
  const goTopics   = (subjectId)          => setNav({ view: 'topics',  subjectId });
  const goLessons  = (sId, tIt)           => setNav({ view: 'lessons', subjectId: sId, topicIt: tIt });
  const goLesson   = (sId, tIt, lId)      => setNav({ view: 'lesson',  subjectId: sId, topicIt: tIt, lessonId: lId });

  return (
    <div className="app">
      <Header
        lang={lang}
        onToggleLang={toggleLang}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        onHome={goSubjects}
      />
      <main className="main">
        {nav.view === 'subjects' && (
          <SubjectGrid
            subjects={subjects}
            lang={lang}
            progress={progress}
            allLessons={allLessons}
            onSelect={s => goTopics(s.id)}
          />
        )}

        {nav.view === 'topics' && currentSubject && (
          <TopicList
            subject={currentSubject}
            lang={lang}
            onSelectTopic={t => goLessons(currentSubject.id, t.topic_it)}
            onBack={goSubjects}
          />
        )}

        {nav.view === 'lessons' && currentSubject && currentTopic && (
          <LessonList
            subject={currentSubject}
            topic={currentTopic}
            lang={lang}
            progress={progress}
            onSelectLesson={l => goLesson(currentSubject.id, currentTopic.topic_it, l.id)}
            onBackToTopics={() => goTopics(currentSubject.id)}
            onBackToSubjects={goSubjects}
          />
        )}

        {nav.view === 'lesson' && currentLesson && currentSubject && currentTopic && (
          <LessonView
            lesson={currentLesson}
            subject={currentSubject}
            topic={currentTopic}
            lang={lang}
            progress={progress}
            onBackToLessons={() => goLessons(currentSubject.id, currentTopic.topic_it)}
            onBackToTopics={() => goTopics(currentSubject.id)}
            onBackToSubjects={goSubjects}
          />
        )}
      </main>
    </div>
  );
}
