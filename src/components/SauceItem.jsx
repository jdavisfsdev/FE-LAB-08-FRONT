/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSauce } from '../utils/sauceApi';
import SauceItemCSS from './SauceItem.module.css';

export default function SauceItem({ sauce }) {

  const handleClick = () => {
    deleteSauce(sauce.id);
  };

  return (
    <>
      <li className={SauceItemCSS.listItem}>
        <h2>{sauce.name}</h2>
        <img src={sauce.url} alt={sauce.name} />
        <h3>{sauce.price}</h3>
        <p>{sauce.heat}</p>
        <Link to={sauce.id}>

          <button>UPDATE INFO</button>   
        </Link>
        <Link to="/">
          <button onClick={handleClick}>DELETE</button> 
        </Link> 
      </li>
    </>
  );
}
