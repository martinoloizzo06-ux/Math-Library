import React from 'react';
import { LEVEL_LABEL } from '../utils/levels.js';

const PIPS = [
  { key: 'essenziale',   letter: 'E' },
  { key: 'approfondita', letter: 'A' },
];

// Indicatori «E» / «A» nelle liste: pieno se il livello esiste, spento se manca.
export default function LevelPips({ available, lang }) {
  const text = PIPS.map(({ key }) => {
    const name = LEVEL_LABEL[key][lang] ?? LEVEL_LABEL[key].it;
    const state = available.includes(key)
      ? (lang === 'it' ? 'disponibile' : 'available')
      : (lang === 'it' ? 'non ancora scritto' : 'not written yet');
    return `${name}: ${state}`;
  }).join('; ');

  return (
    <span className="level-pips" role="img" aria-label={text} title={text}>
      {PIPS.map(({ key, letter }) => (
        <span
          key={key}
          aria-hidden="true"
          className={`level-pip${available.includes(key) ? ' level-pip--on' : ''}`}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
