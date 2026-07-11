import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const MD = {
  remarkPlugins: [remarkMath, remarkGfm],
  rehypePlugins: [rehypeKatex, rehypeRaw],
};

const DOMANDA_MARKER  = '[domanda]';
const RISPOSTA_MARKER = '[risposta]';

export default function Checkpoint({ source }) {
  const raw = source || '';
  const di = raw.indexOf(DOMANDA_MARKER);
  const ri = raw.indexOf(RISPOSTA_MARKER);

  // Fallback: nessun marcatore riconosciuto
  if (di === -1 && ri === -1) {
    return <pre className="checkpoint checkpoint--raw">{raw}</pre>;
  }

  let domanda = '';
  let risposta = '';

  if (di !== -1 && ri !== -1) {
    domanda  = raw.slice(di + DOMANDA_MARKER.length, ri).trim();
    risposta = raw.slice(ri + RISPOSTA_MARKER.length).trim();
  } else if (di !== -1) {
    domanda = raw.slice(di + DOMANDA_MARKER.length).trim();
  } else {
    risposta = raw.slice(ri + RISPOSTA_MARKER.length).trim();
  }

  return (
    <div className="checkpoint">
      <div className="checkpoint__header">
        <span className="checkpoint__icon" aria-hidden="true">✋</span>
        <span className="checkpoint__label">Fermati e verifica</span>
      </div>

      {domanda && (
        <div className="checkpoint__domanda">
          <ReactMarkdown {...MD}>{domanda}</ReactMarkdown>
        </div>
      )}

      {risposta && (
        <details className="checkpoint__risposta-wrap">
          <summary className="checkpoint__toggle">Mostra la risposta</summary>
          <div className="checkpoint__risposta">
            <ReactMarkdown {...MD}>{risposta}</ReactMarkdown>
          </div>
        </details>
      )}
    </div>
  );
}
