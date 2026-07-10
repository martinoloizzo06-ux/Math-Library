import { useState } from 'react';
import MathPlot from './MathPlot.jsx';

export default function FunctionSlider({
  fn, fn2,
  domain, yDomain,
  title, label1, label2,
  pname = 'a',
  pmin = -5, pmax = 5, pdefault = 1, pstep = 0.1,
  plabel,
  color, color2,
}) {
  const [val, setVal] = useState(Number(pdefault));
  const params = { [pname]: val };
  const fmt = v => (v % 1 === 0 ? String(v) : v.toFixed(2));

  return (
    <div className="math-slider-wrap">
      <MathPlot
        fn={fn} fn2={fn2}
        domain={Array.isArray(domain) ? domain : [-5, 5]}
        yDomain={yDomain}
        title={title}
        label1={label1} label2={label2}
        params={params}
        color={color} color2={color2}
      />
      <div className="math-slider-control">
        <div className="math-slider-row">
          <span className="math-slider-info">
            {plabel || pname} ={' '}
            <strong className="math-slider-val">{fmt(val)}</strong>
          </span>
          <span className="math-slider-bounds">
            <span>{fmt(Number(pmin))}</span>
            <span>{fmt(Number(pmax))}</span>
          </span>
        </div>
        <input
          type="range"
          min={pmin} max={pmax} step={pstep}
          value={val}
          onChange={e => setVal(Number(e.target.value))}
          className="math-slider-input"
        />
      </div>
    </div>
  );
}
