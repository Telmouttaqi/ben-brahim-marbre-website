import React from 'react';

export default function ProductCard({ item }) {
  const [name, secondElement, thirdElement] = item;
  
  // Determine if we have 3 elements (name, location, image) or 2 elements (name, image)
  const hasThreeElements = item.length === 3;
  const location = hasThreeElements ? secondElement : null;
  const image = hasThreeElements ? thirdElement : secondElement;

  return (
    <article className="card">
      <img src={image} alt={name} loading="lazy" />
      <h3>{name}</h3>
      {location && <p>{location}</p>}
    </article>
  );
}
