import React from 'react';
import { Link } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
});

const NavBar = () => (
  <>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper nav-bar__index">
          <Link to="/" className="brand-logo">
            Olá Educa
          </Link>
          <Link to="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">FERRAMENTAS</Link>
            </li>
            <li>
              <Link to="/">METODOLOGIAS</Link>
            </li>
            <li>
              <Link to="/">DICAS</Link>
            </li>
            <li>
              <Link to="/">SOBRE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <ul className="sidenav" id="mobile-demo">
      <li>
        <Link to="/">FERRAMENTAS</Link>
      </li>
      <li>
        <Link to="/">METODOLOGIAS ATIVAS</Link>
      </li>
      <li>
        <Link to="/">DICAS</Link>
      </li>
      <li>
        <Link to="/">SOBRE</Link>
      </li>
    </ul>
  </>
);

export default NavBar;
