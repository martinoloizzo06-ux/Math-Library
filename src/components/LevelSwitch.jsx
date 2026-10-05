import React from 'react';
import { LEVEL_KEYS, LEVEL_LABEL } from '../utils/levels.js';

// Selettore a due voci Essenziale | Approfondimento (segmented control accessibile).
// Una voce senza file resta visibile ma disattivata, con la dicitura «non ancora scritto».
export default function LevelSwitch({ available, active, onChange, lang, idPrefix }) {
  const enabled = LEVEL_KEYS.filter(k => available.includes(k));

  const onKeyDown = e => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const i = enabled.indexOf(active);
    let next = active;
    if (e.key === 'Home') next = enabled[0];
    else if (e.key === 'End') next = enabled[enabled.length - 1];
    else next = enabled[(i + (e.key === 'ArrowRight' ? 1 : -1) + enabled.length) % enabled.length];
    if (next !== active) {
      onChange(next);
      document.getElementById(`${idPrefix}-tab-${next}`)?.focus();
    }
  };

  return (
    <div
      className="level-switch"
      role="tablist"
      aria-label={lang === 'it' ? 'Livello di approfondimento' : 'Depth level'}
      onKeyDown={onKeyDown}
    >
      {LEVEL_KEYS.map(key => {
        const isAvailable = available.includes(key);
        const isActive = key === active;
        return (
          <button
            key={key}
            id={`${idPrefix}-tab-${key}`}
            type="button"
            role="tab"
            className={`level-switch__tab${isActive ? ' level-switch__tab--active' : ''}`}
            aria-selected={isActive}
            aria-controls={`${idPrefix}-panel`}
            tabIndex={isActive ? 0 : -1}
            disabled={!isAvailable}
            onClick={() => onChange(key)}
          >
            <span className="level-switch__name">{LEVEL_LABEL[key][lang] ?? LEVEL_LABEL[key].it}</span>
            {!isAvailable && (
              <span className="level-switch__note">
                {lang === 'it' ? 'non ancora scritto' : 'not written yet'}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
