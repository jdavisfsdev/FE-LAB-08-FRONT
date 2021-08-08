import React, { useState } from 'react';

export default function List() {
  const [sauces, setSauces] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {sauces ?
        <ul>
          {sauces.map(sauce => (
            <SauceItem key={sauce.name} sauce={sauce}/>
          ))}
        </ul>  :
        <h1>No Sauces Yet</h1> }
            
    </div>
  );
}
