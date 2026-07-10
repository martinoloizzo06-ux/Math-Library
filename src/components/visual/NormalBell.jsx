import { useState, useMemo, useId } from 'react';

/* ── dimensioni SVG (costanti) ────────────────────────── */
const W = 560, H = 280;
const P = { t: 32, r: 20, b: 50, l: 20 };   // t=32 lascia spazio all'etichetta μ sopra
const PW = W - P.l - P.r;
const PH = H - P.t - P.b;
const N  = 400;

/* Dominio x fisso: la curva si sposta visibilmente quando μ cambia */
const X_MIN = -8;
const X_MAX  =  8;

/* sx è una funzione pura delle costanti — definita a livello modulo */
const sx = x => P.l + ((x - X_MIN) / (X_MAX - X_MIN)) * PW;

/* Tick numerici fissi a intervalli di 4 */
const X_TICKS = [-6, -3, 0, 3, 6];

/* ── funzioni matematiche ─────────────────────────────── */
function normalPDF(x, mu, sigma) {
  return Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
}

/* Approssimazione Abramowitz & Stegun della CDF normale standard Φ(z) */
function Phi(z) {
  const p = 0.2316419;
  const b = [0.319381530, -0.356563782, 1.781477937, -1.821255978, 1.330274429];
  const t = 1 / (1 + p * Math.abs(z));
  const poly = ((((b[4]*t + b[3])*t + b[2])*t + b[1])*t + b[0]) * t;
  const pdf0 = Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
  const cdf  = 1 - pdf0 * poly;
  return z >= 0 ? cdf : 1 - cdf;
}

function pct(p) { return (p * 100).toFixed(2) + '%'; }

/* ── componente ───────────────────────────────────────── */
export default function NormalBell({ mu_default = 0, sigma_default = 1, title }) {
  const [mu,    setMu]    = useState(Number(mu_default));
  const [sigma, setSigma] = useState(Number(sigma_default));
  const uid    = useId().replace(/:/g, '_');
  const clipId = `nb-${uid}`;

  /* tutto ciò che dipende da mu e sigma viene calcolato una volta sola */
  const plot = useMemo(() => {
    const yPeak = normalPDF(mu, mu, sigma);
    const yMax  = yPeak * 1.18;
    const sy    = y => P.t + ((yMax - y) / yMax) * PH;
    const y0    = sy(0);

    /* campiono la curva sull'intero dominio fisso */
    const pts = [];
    for (let i = 0; i <= N; i++) {
      const x = X_MIN + (i / N) * (X_MAX - X_MIN);
      pts.push([x, normalPDF(x, mu, sigma)]);
    }

    const mainPath = pts
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`)
      .join('');

    /* area colorata per una banda ±kσ attorno a μ, clampata al dominio visibile */
    function bandPath(kLo, kHi) {
      const lo = Math.max(mu + kLo * sigma, X_MIN);
      const hi = Math.min(mu + kHi * sigma, X_MAX);
      if (lo >= hi) return '';
      const slice = pts.filter(([x]) => x >= lo - 1e-9 && x <= hi + 1e-9);
      if (!slice.length) return '';
      let d = `M${sx(lo).toFixed(1)},${y0.toFixed(1)}`;
      slice.forEach(([x, y]) => { d += `L${sx(x).toFixed(1)},${sy(y).toFixed(1)}`; });
      d += `L${sx(hi).toFixed(1)},${y0.toFixed(1)}Z`;
      return d;
    }

    return {
      mainPath,
      band3: bandPath(-3, 3),
      band2: bandPath(-2, 2),
      band1: bandPath(-1, 1),
      y0,
    };
  }, [mu, sigma]);

  /* posizione pixel della media (si aggiorna ad ogni render) */
  const muX = sx(Math.max(X_MIN, Math.min(X_MAX, mu)));

  /* probabilità entro ±kσ (costanti: dipendono solo dalla forma, non da μ) */
  const p1 = pct(Phi(1) - Phi(-1));
  const p2 = pct(Phi(2) - Phi(-2));
  const p3 = pct(Phi(3) - Phi(-3));

  return (
    <div className="normal-bell-wrap">
      {title && <div className="math-plot-title">{title}</div>}

      <svg viewBox={`0 0 ${W} ${H}`} className="math-plot-svg">
        <defs>
          <clipPath id={clipId}>
            <rect x={P.l} y={P.t} width={PW} height={PH} />
          </clipPath>
        </defs>

        {/* ── contenuto clippato all'area del grafico ── */}
        <g clipPath={`url(#${clipId})`}>
          <path d={plot.band3} fill="var(--primary)" opacity="0.08" />
          <path d={plot.band2} fill="var(--primary)" opacity="0.15" />
          <path d={plot.band1} fill="var(--primary)" opacity="0.28" />

          {/* linea verticale tratteggiata in μ */}
          <line
            x1={muX} y1={P.t} x2={muX} y2={plot.y0}
            stroke="var(--primary)" strokeWidth="1.5"
            strokeDasharray="4,3" opacity="0.6"
          />

          <path
            d={plot.mainPath} fill="none"
            stroke="var(--primary)" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </g>

        {/* ── etichetta μ sopra la linea tratteggiata (fuori dal clip) ── */}
        <text
          x={muX} y={P.t - 7}
          textAnchor="middle" fontSize="10" fontWeight="700"
          fill="var(--primary)"
        >
          μ = {mu.toFixed(1)}
        </text>

        {/* ── asse x ── */}
        <line
          x1={P.l} y1={plot.y0} x2={W - P.r} y2={plot.y0}
          stroke="var(--text-muted)" strokeWidth="1.2"
        />

        {/* ── tick numerici fissi (mostrano la scala assoluta) ── */}
        {X_TICKS.map((v) => (
          <text
            key={v} x={sx(v)} y={H - P.b + 16}
            textAnchor="middle" fontSize="10" fill="var(--text-muted)"
          >
            {v}
          </text>
        ))}

        {/* ── bordo del plot ── */}
        <rect
          x={P.l} y={P.t} width={PW} height={PH}
          fill="none" stroke="var(--border)" strokeWidth="1" rx="2"
        />
      </svg>

      {/* ── controlli slider ── */}
      <div className="normal-bell-controls">
        {/* slider μ */}
        <div className="math-slider-label">
          <div className="math-slider-row">
            <span>
              Media &nbsp;
              <strong className="math-slider-val">μ = {mu.toFixed(1)}</strong>
            </span>
            <span className="math-slider-bounds">
              <span>−5</span><span>+5</span>
            </span>
          </div>
          <input
            type="range" min={-5} max={5} step={0.1} value={mu}
            onChange={e => setMu(Number(e.target.value))}
            className="math-slider-input"
          />
        </div>

        {/* slider σ */}
        <div className="math-slider-label">
          <div className="math-slider-row">
            <span>
              Dev. std &nbsp;
              <strong className="math-slider-val">σ = {sigma.toFixed(1)}</strong>
            </span>
            <span className="math-slider-bounds">
              <span>0.3</span><span>3.0</span>
            </span>
          </div>
          <input
            type="range" min={0.3} max={3} step={0.1} value={sigma}
            onChange={e => setSigma(Number(e.target.value))}
            className="math-slider-input"
          />
        </div>
      </div>

      {/* ── statistiche ── */}
      <div className="normal-bell-stats">
        <div className="normal-bell-stat">
          <strong>{p1}</strong> entro ±1σ
        </div>
        <div className="normal-bell-stat">
          <strong>{p2}</strong> entro ±2σ
        </div>
        <div className="normal-bell-stat">
          <strong>{p3}</strong> entro ±3σ
        </div>
      </div>
    </div>
  );
}
