// Livelli di una lezione (CONTRATTO_V3 §2): Essenziale e Approfondimento.
// Chiavi interne: 'essenziale' | 'approfondita'. Valori nell'URL: ?livello=essenziale | approfondimento.

export const LEVEL_KEYS = ['essenziale', 'approfondita'];

export const LEVEL_LABEL = {
  essenziale:   { it: 'Essenziale',      en: 'Essential' },
  approfondita: { it: 'Approfondimento', en: 'In depth' },
};

const PARAM_TO_KEY = { essenziale: 'essenziale', approfondimento: 'approfondita' };
const KEY_TO_PARAM = { essenziale: 'essenziale', approfondita: 'approfondimento' };

const STORAGE_KEY = 'matbib-livello';

export const levelFromParam = param => PARAM_TO_KEY[param] ?? null;
export const levelToParam   = key   => KEY_TO_PARAM[key];

export function readLevelPreference() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return LEVEL_KEYS.includes(v) ? v : null;
  } catch {
    return null;
  }
}

export function saveLevelPreference(key) {
  try { localStorage.setItem(STORAGE_KEY, key); } catch { /* storage non disponibile */ }
}

// Sceglie il livello da mostrare: parametro URL → preferenza ricordata → Essenziale → unico disponibile.
// Un livello richiesto ma non scritto viene ignorato.
export function resolveLevel(lesson, param, preference) {
  const available = lesson.levelsAvailable ?? [];
  const requested = levelFromParam(param);
  if (requested && available.includes(requested)) return requested;
  if (preference && available.includes(preference)) return preference;
  if (available.includes('essenziale')) return 'essenziale';
  return available[0] ?? null;
}
