import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div> <Link to="/add">
        <button>Add A Sauce</button>  
      </Link>
      </div>

      <div> <Link to="/">
        <button>Home</button>  
      </Link>
      </div>
    </>
  );
}
