import React from 'react';

export default function ProductCard({ item }) {
  const [name, location, price, image] = item;
  const imageUrl = image || price;

  return (
    <article className="card">
      <img src={imageUrl} alt={name} loading="lazy" />
      <h3>{name}</h3>
      {location && <p>{location}</p>}
      <strong>{price || location}</strong>
    </article>
  );
}
