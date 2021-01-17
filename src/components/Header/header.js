import React from 'react';
import './style.css';

const Header = ({ ...children }) => (
  <section className="components-header">
    <div className="container components-header__container">
      <h2 className="components-header__h2"> {children.title} </h2>
      <hr className="components-header__hr" />
      <p>{children.desc}</p>
    </div>
  </section>
);

export default Header;
