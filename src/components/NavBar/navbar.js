import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

const NavBar = () => (
  <Navbar
    className="components-navbar"
    fixed
    alignLinks="right"
    brand={
      <Link className="brand-logo" to="/">
        Olá Educa
      </Link>
    }
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true,
    }}
    sidenav={
      <ul>
        <li>
          <Link to="/ferramentas">FERRAMENTAS</Link>
        </li>
        <li>
          <Link to="/metodologias">METODOLOGIAS</Link>
        </li>
        <li>
          <Link to="/">DICAS</Link>
        </li>
        <li>
          <Link to="/">SOBRE</Link>
        </li>
      </ul>
    }
  >
    <Link to="/ferramentas">FERRAMENTAS</Link>
    <Link to="/metodologias">METODOLOGIAS</Link>
    <Link to="/">FORMAS DE APLICAÇÃO</Link>
    <Link to="/">SOBRE</Link>
  </Navbar>
);
export default NavBar;
