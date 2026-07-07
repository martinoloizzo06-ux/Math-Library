import React from 'react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Navigazione">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
          {item.onClick ? (
            <button className="breadcrumb-link" onClick={item.onClick}>{item.label}</button>
          ) : (
            <span className="breadcrumb-current" aria-current="page">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
