import React from 'react';

export default function SectionTitle({ children, sub }) {
  return (
    <div className="sectionTitle">
      <div>
        <h2>{children}</h2>
        <p>{sub}</p>
      </div>
    </div>
  );
}
