import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="nav">
    <Link to="/" className="navbar-item">
      <h3>Home</h3>
    </Link>

    <Link to="/about">
      <h3>About</h3>
    </Link>
    <Link to="/tags">
      <h3>Tags</h3>
    </Link>
  </nav>
);
export default Navbar;
