/* eslint-disable react/prop-types */
import React from 'react';
import SauceItem from './SauceItem';
import ListCSS from './List.module.css';


export default function List({ sauces }) {
  
  return (
    <ul className={ListCSS.list}>
      {sauces.map(sauce => (
        <SauceItem key={sauce.name} sauce={sauce}/>
      ))}
    </ul>   
  );
}
