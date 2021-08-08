/* eslint-disable react/prop-types */
import React from 'react';

export default function SauceItem({ sauce }) {

  return (
    <li>
      <h2>{sauce.name}</h2>
      <img src={sauce.url} alt={sauce.name} />
      <h3>{sauce.price}</h3>
      <p>{sauce.heat}</p>     
    </li>
  );
}
