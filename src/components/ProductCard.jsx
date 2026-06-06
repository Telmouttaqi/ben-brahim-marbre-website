import React from 'react';

export default function ProductCard({ item }) {
  const [name, locationOrImage, imageOrUndefined] = item;
  const image = imageOrUndefined || locationOrImage;
  const location = typeof locationOrImage === 'string' ? locationOrImage : null;

  return (
    <article className="card">
      <img src={image} alt={name} loading="lazy" />
      <h3>{name}</h3>
      {location && <p>{location}</p>}
    </article>
  );
}
