/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSauce } from '../utils/sauceApi';

export default function SauceItem({ sauce }) {

  const handleClick = () => {
    deleteSauce(sauce.id);
  };

  return (
    <li>
      <h2>{sauce.name}</h2>
      <img src={sauce.url} alt={sauce.name} />
      <h3>{sauce.price}</h3>
      <p>{sauce.heat}</p>   
      <Link to="/">
        <button onClick={handleClick}>DELETE</button> 
      </Link> 
    </li>
  );
}
