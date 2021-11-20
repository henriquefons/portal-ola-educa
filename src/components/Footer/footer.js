import React from 'react';
import './style.css';
import Footer from 'react-materialize/lib/Footer';

const MyFooter = () => (
  <Footer
    className="components-footer"
    copyrights="Todos direitos reservados © 2020"
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Código fonte do Portal
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Acessar projeto do portal
          </a>
        </li>
      </ul>
    }
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="/sobre">
        Sobre
      </a>
    }
  >
    <h5 className="white-text">Olá Educa</h5>
    <p className="grey-text text-lighten-4">
      Turbine a experiencia das metodologias ativas com ferramentas digitais!
    </p>
  </Footer>
);

export default MyFooter;
