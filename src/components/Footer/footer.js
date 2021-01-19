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
            Git do portal
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Conheça o projeto
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            Blá blá blá
          </a>
        </li>
      </ul>
    }
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        Sobre
      </a>
    }
  >
    <h5 className="white-text">Olá Educa</h5>
    <p className="grey-text text-lighten-4">
      Apoie essa comunidade! Doe para que este site esteja sempre no ar!
    </p>
  </Footer>
);

export default MyFooter;
