import React, { useState, useEffect } from 'react';
import { getSauces } from '../utils/sauceApi';
import List from './List';
import SauceForm from './SauceForm';

export default function Main() {
  const [sauces, setSauces] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(async () => {
    const sauces = await getSauces();
    setSauces(sauces);
    setLoading(false);
    return sauces;
  }, [<List />]);
    
  if(loading) return <h1>Loading...</h1>;
  if(sauces.length === 0)
    return (
      <SauceForm /> 
    );
  return <List sauces={sauces}/>;
}
