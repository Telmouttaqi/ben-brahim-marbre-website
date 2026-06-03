import React from 'react';

export default function StatCard({ icon, big, text }) {
  return (
    <div className="stat">
      {icon}
      <b>{big}</b>
      <span>{text}</span>
    </div>
  );
}
