import React from 'react';
import HeaderCSS from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={HeaderCSS.header}>
      <div> <Link to="/add">
        <button>Add A Sauce</button>  
      </Link>
      </div>

      <div> <Link to="/">
        <button>Home</button>  
      </Link>
      </div>

      <h1>HOT SAUCE TRACKER! ADD YOUR SAUCES</h1>
    </header>
  );
}
