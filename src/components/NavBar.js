import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/post-read-interview'>Interview</Link>
    </div>
  );
}

export default NavBar;