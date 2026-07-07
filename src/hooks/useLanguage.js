import { useState } from 'react';

export function useLanguage() {
  const [lang, setLang] = useState(() => localStorage.getItem('matbib-lang') || 'it');

  const toggle = () =>
    setLang(l => {
      const next = l === 'it' ? 'en' : 'it';
      localStorage.setItem('matbib-lang', next);
      return next;
    });

  const t = (it, en) => (lang === 'en' ? en || it : it);

  return { lang, toggle, t };
}
