import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import '../css/style.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Jinwoo's Blog" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
