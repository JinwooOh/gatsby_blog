import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav>
    <Link to="/" className="navbar-item">
      <h3>Home</h3>
    </Link>

    <Link to="/about">About</Link>
  </nav>
);
export default Navbar;
