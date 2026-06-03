import React from 'react';

export default function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      {icon}
      <div>
        <b>{title}</b>
        <small>{text}</small>
      </div>
    </div>
  );
}
