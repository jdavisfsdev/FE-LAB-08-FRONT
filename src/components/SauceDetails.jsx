import React, { useEffect, useState } from 'react';
import SauceDetailsCSS from './SauceDeatils.module.css';
import { useParams } from 'react-router-dom';
import { getSauce, updateSauce } from '../utils/sauceApi';

export default function SauceDetails() {
  const [sauce, setSauce] = useState([]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');
  const [heat, setHeat] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(async () => {
    const sauce = await getSauce(id);
    setSauce(sauce);
    setName(sauce.name);
    setUrl(sauce.url);
    setPrice(sauce.price);
    setHeat(sauce.heat);
    setLoading(false);
  }, [handleClick]);

  const handleNameChange = ({ target }) => {
    if(target.value === null) return;
    setName(target.value);

  };

  const handlePriceChange = ({ target }) => {
    if(target.value === null) return;
    setPrice(target.value);
  };

  const handleUrlChange = ({ target }) => {
    if(target.value === null) return;
    setUrl(target.value);
  };

  const handleHeatChange = ({ target }) => {
    if(target.value === null) return;
    setHeat(target.value);
  };

  const handleClick = async () => {
    const sauce = {
      name, price, url, heat, id
    };
    setSauce(sauce);
    console.log(sauce);
    await updateSauce(sauce);
  };
  return (
    <div className={SauceDetailsCSS.list}>
      Name <input type="text" placeholder={sauce.name} name="name" onChange={handleNameChange}/>
      Image URL <input type="text" placeholder={sauce.url} name="url" onChange={handleUrlChange}/>
      Price <input type="text" placeholder={sauce.price} name="price" onChange={handlePriceChange}/>
      Heat <input type="text" placeholder={sauce.heat} name="heat" onChange={handleHeatChange}/>
      <button onClick={handleClick}>UPDATE</button>
    </div>
  );
}
