/* eslint-disable max-len */
import React, { useState } from 'react';
import SauceFormCSS from './SauceForm.module.css';
import { addSauce } from '../utils/sauceApi';

export default function SauceForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');
  const [heat, setHeat] = useState('');

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handlePriceChange = ({ target }) => {
    setPrice(target.value);
  };

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleHeatChange = ({ target }) => {
    setHeat(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sauce = {
      name,
      url,
      price,
      heat
    };
    console.log(sauce);
    addSauce(sauce);
    alert('Sauce Added!');
  };

  return (
    <form onSubmit={handleSubmit} className={SauceFormCSS.form}>
      <p>
        <label>
          <span>Sauce Name</span>
          <input type="text" name="name" placeholder="Name" onChange={handleNameChange}/>
        </label>
      </p>

      <p>
        <label>
          <span>Sauce Image URL</span>
          <input type="text" name="url" placeholder="URL" onChange={handleUrlChange}/>
        </label>
      </p>

      <p>
        <label>
          <span>Sauce Price</span>
          <input type="text" name="price" placeholder="Price" onChange={handlePriceChange}/>
        </label>
      </p>

      <p>
        <label>
          <span>Sauce Heat</span>
          <input type="text" name="heat" placeholder="Heat"  onChange={handleHeatChange}/>
        </label>
      </p>

      <button onClick={handleSubmit}>SUBMIT</button>
    </form>
  );
}
