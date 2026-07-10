import React from 'react';
import SearchBar from './SearchBar.jsx';

export default function Header({ lang, onToggleLang, darkMode, onToggleDark, onHome, allLessons, subjects }) {
  return (
    <header className="header">
      <button className="header-logo" onClick={onHome} aria-label="Home">
        <span className="header-logo-icon">∑</span>
        <span className="header-logo-text">
          {lang === 'it' ? 'Biblioteca di Matematica' : 'Mathematics Library'}
        </span>
      </button>
      <div className="header-actions">
        <SearchBar allLessons={allLessons} subjects={subjects} lang={lang} />
        <button
          className="btn-icon"
          onClick={onToggleLang}
          title={lang === 'it' ? 'Switch to English' : "Passa all'italiano"}
        >
          {lang === 'it' ? 'EN' : 'IT'}
        </button>
        <button
          className="btn-icon"
          onClick={onToggleDark}
          title={darkMode ? 'Modalità chiara' : 'Modalità scura'}
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}
