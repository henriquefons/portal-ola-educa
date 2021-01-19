import React from 'react';
import './style.css';
import Footer from 'react-materialize/lib/Footer';

const MyFooter = () => (
  <Footer
    className="components-footer"
    copyrights="Todos direitos reservados © 2020"
  >
    <h5 className="white-text">Olá Educa</h5>
    <p className="grey-text text-lighten-4">
      Apoie essa comunidade! Doe para que este site esteja sempre no ar!
    </p>
  </Footer>
);

export default MyFooter;
