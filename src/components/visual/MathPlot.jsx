import { useMemo, useId } from 'react';

const W = 560, H = 280;
const P = { t: 20, r: 20, b: 42, l: 54 };
const PW = W - P.l - P.r;
const PH = H - P.t - P.b;
const N = 350;

function compileFn(expr, paramNames) {
  try {
    // eslint-disable-next-line no-new-func
    return new Function('x', ...paramNames, `"use strict"; return (${expr});`);
  } catch { return null; }
}

function niceTicks(lo, hi, count = 5) {
  const range = hi - lo;
  if (range === 0) return [lo];
  const raw = range / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norms = [1, 2, 2.5, 5, 10];
  const step = norms.map(n => n * mag).find(s => range / s <= count + 1) || mag * 10;
  const start = Math.ceil(lo / step - 1e-9) * step;
  const ticks = [];
  for (let v = start; v <= hi + step * 0.01; v += step) {
    ticks.push(Math.round(v / step) * step);
  }
  return ticks;
}

function fmtN(v) {
  if (v === 0) return '0';
  const a = Math.abs(v);
  if (a >= 1000 || (a < 0.01 && a > 0)) return v.toExponential(1);
  return v.toFixed(a >= 100 ? 0 : a >= 10 ? 0 : a >= 1 ? 1 : 2);
}

export default function MathPlot({
  fn, fn2,
  domain, yDomain,
  title, label1, label2,
  color = 'var(--primary)',
  color2 = '#dc2626',
  params = {},
}) {
  const uid = useId().replace(/:/g, '_');
  const [xMin, xMax] = Array.isArray(domain) ? domain : [-5, 5];

  const { pts1, pts2, yMin, yMax } = useMemo(() => {
    const pKeys = Object.keys(params);
    const pVals = Object.values(params);
    const f1 = compileFn(fn, pKeys);
    const f2 = fn2 ? compileFn(fn2, pKeys) : null;
    const pts1 = [], pts2 = [], allY = [];

    for (let i = 0; i <= N; i++) {
      const x = xMin + (i / N) * (xMax - xMin);
      if (f1) {
        try {
          const y = f1(x, ...pVals);
          if (isFinite(y)) { pts1.push([x, y]); allY.push(y); }
          else pts1.push(null);
        } catch { pts1.push(null); }
      }
      if (f2) {
        try {
          const y = f2(x, ...pVals);
          if (isFinite(y)) { pts2.push([x, y]); allY.push(y); }
          else pts2.push(null);
        } catch { pts2.push(null); }
      }
    }

    if (!allY.length) return { pts1, pts2, yMin: -1, yMax: 1 };

    let lo, hi;
    if (Array.isArray(yDomain)) {
      lo = yDomain[0]; hi = yDomain[1];
    } else {
      const lo0 = Math.min(...allY), hi0 = Math.max(...allY);
      const r = (hi0 - lo0) || 1;
      lo = lo0 - r * 0.13; hi = hi0 + r * 0.13;
    }
    return { pts1, pts2, yMin: lo, yMax: hi };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, fn2, xMin, xMax, JSON.stringify(params), JSON.stringify(yDomain)]);

  const sx = x => P.l + ((x - xMin) / (xMax - xMin)) * PW;
  const sy = y => P.t + ((yMax - y) / (yMax - yMin)) * PH;

  function toPath(pts) {
    let d = '', pen = false;
    for (const p of pts) {
      if (!p) { pen = false; continue; }
      const cy = sy(p[1]);
      if (cy < P.t - 10 || cy > H - P.b + 10) { pen = false; continue; }
      d += pen
        ? `L${sx(p[0]).toFixed(1)},${cy.toFixed(1)}`
        : `M${sx(p[0]).toFixed(1)},${cy.toFixed(1)}`;
      pen = true;
    }
    return d;
  }

  const xTicks = niceTicks(xMin, xMax, 6);
  const yTicks = niceTicks(yMin, yMax, 4);
  const x0 = xMin < 0 && xMax > 0 ? sx(0) : null;
  const y0 = yMin < 0 && yMax > 0 ? sy(0) : null;
  const clipId = `mc-${uid}`;

  return (
    <figure className="math-plot">
      {title && <figcaption className="math-plot-title">{title}</figcaption>}
      <svg viewBox={`0 0 ${W} ${H}`} className="math-plot-svg">
        <defs>
          <clipPath id={clipId}>
            <rect x={P.l} y={P.t} width={PW} height={PH} />
          </clipPath>
        </defs>

        {/* Grid */}
        {xTicks.map(v => (
          <line key={v} x1={sx(v)} y1={P.t} x2={sx(v)} y2={H - P.b}
            stroke="var(--border)" strokeWidth="0.7" />
        ))}
        {yTicks.map(v => (
          <line key={v} x1={P.l} y1={sy(v)} x2={W - P.r} y2={sy(v)}
            stroke="var(--border)" strokeWidth="0.7" />
        ))}

        {/* Assi */}
        {y0 != null && (
          <line x1={P.l} y1={y0} x2={W - P.r} y2={y0}
            stroke="var(--text-muted)" strokeWidth="1.3" />
        )}
        {x0 != null && (
          <line x1={x0} y1={P.t} x2={x0} y2={H - P.b}
            stroke="var(--text-muted)" strokeWidth="1.3" />
        )}

        {/* Etichette assi */}
        {xTicks.map(v => (
          <text key={v} x={sx(v)} y={H - P.b + 14}
            textAnchor="middle" fontSize="10" fill="var(--text-muted)">{fmtN(v)}</text>
        ))}
        {yTicks.map(v => (
          <text key={v} x={P.l - 5} y={sy(v) + 3.5}
            textAnchor="end" fontSize="10" fill="var(--text-muted)">{fmtN(v)}</text>
        ))}

        {/* Curve */}
        <g clipPath={`url(#${clipId})`}>
          <path d={toPath(pts1)} fill="none" stroke={color} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
          {fn2 && (
            <path d={toPath(pts2)} fill="none" stroke={color2} strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 4" />
          )}
        </g>

        {/* Bordo */}
        <rect x={P.l} y={P.t} width={PW} height={PH}
          fill="none" stroke="var(--border)" strokeWidth="1" rx="2" />
      </svg>

      {(label1 || label2) && (
        <div className="math-plot-legend">
          {label1 && (
            <span className="math-plot-legend-item">
              <span className="math-plot-legend-line" style={{ background: color }} />
              {label1}
            </span>
          )}
          {label2 && (
            <span className="math-plot-legend-item">
              <span className="math-plot-legend-line math-plot-legend-line--dash"
                style={{ borderTopColor: color2 }} />
              {label2}
            </span>
          )}
        </div>
      )}
    </figure>
  );
}
