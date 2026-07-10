import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch.js';

export default function SearchBar({ allLessons, subjects, lang }) {
  const [open, setOpen]   = useState(false);
  const { query, setQuery, results } = useSearch(allLessons, subjects);
  const navigate  = useNavigate();
  const inputRef  = useRef(null);
  const overlayRef = useRef(null);

  // Cmd+K / Ctrl+K to open; Escape to close
  useEffect(() => {
    const handler = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Focus input when overlay opens; clear query when closed
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery('');
    }
  }, [open, setQuery]);

  const go = lesson => {
    navigate(`/${lesson.subject}/${lesson.topicSlug}/${lesson.lessonSlug}`);
    setOpen(false);
  };

  const closeOnBackdrop = e => {
    if (e.target === overlayRef.current) setOpen(false);
  };

  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform);
  const shortcut = isMac ? '⌘K' : 'Ctrl+K';

  return (
    <>
      <button
        className="btn-icon search-trigger"
        onClick={() => setOpen(true)}
        title={`${lang === 'it' ? 'Cerca' : 'Search'} (${shortcut})`}
        aria-label={lang === 'it' ? 'Apri ricerca' : 'Open search'}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <line x1="13" y1="13" x2="18" y2="18" />
        </svg>
      </button>

      {open && (
        <div className="search-overlay" ref={overlayRef} onClick={closeOnBackdrop} role="dialog" aria-modal="true" aria-label={lang === 'it' ? 'Ricerca lezioni' : 'Search lessons'}>
          <div className="search-modal">

            <div className="search-input-wrap">
              <svg className="search-input-icon" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <line x1="13" y1="13" x2="18" y2="18" />
              </svg>
              <input
                ref={inputRef}
                className="search-input"
                type="search"
                autoComplete="off"
                placeholder={lang === 'it' ? 'Cerca lezioni, argomenti...' : 'Search lessons, topics...'}
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <kbd className="search-esc-hint" onClick={() => setOpen(false)}>Esc</kbd>
            </div>

            {query.length >= 2 && results.length > 0 && (
              <ul className="search-results" role="listbox">
                {results.map(({ item }) => {
                  const title   = lang === 'it' ? item.title_it : (item.title_en || item.title_it);
                  const topicL  = lang === 'it' ? item.topic_it : (item.topic_en || item.topic_it);
                  const subjMeta = subjects.find(s => s.id === item.subject);
                  const subjL   = lang === 'it' ? subjMeta?.label_it : subjMeta?.label_en;
                  return (
                    <li key={item.id} role="option">
                      <button className="search-result-item" onClick={() => go(item)}>
                        <span className={`lesson-dot lesson-dot--${item.level || 'blue'}`} />
                        <div className="search-result-text">
                          <span className="search-result-title">{title}</span>
                          <span className="search-result-meta">{subjL} › {topicL}</span>
                        </div>
                        <span className="search-result-arrow">›</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            {query.length >= 2 && results.length === 0 && (
              <p className="search-empty">
                {lang === 'it' ? `Nessun risultato per "${query}".` : `No results for "${query}".`}
              </p>
            )}

            {query.length < 2 && (
              <p className="search-hint">
                {lang === 'it'
                  ? '121 lezioni in 7 materie — digita almeno 2 caratteri.'
                  : '121 lessons across 7 subjects — type at least 2 characters.'}
              </p>
            )}

          </div>
        </div>
      )}
    </>
  );
}
