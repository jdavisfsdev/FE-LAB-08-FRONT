/* eslint-disable react/prop-types */
import React from 'react';
import SauceItem from './SauceItem';


export default function List({ sauces }) {
  
  return (
    <ul>
      {sauces.map(sauce => (
        <SauceItem key={sauce.name} sauce={sauce}/>
      ))}
    </ul>   
  );
}
