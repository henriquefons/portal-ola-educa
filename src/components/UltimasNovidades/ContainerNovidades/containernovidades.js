import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';

import './style.css';

const ContainerNovidades = () => (
  <section className="components-ultimasnovidades-containernovidades">
    <h4 className="center-align">Ultimas novidades</h4>
    <Row>
      <Card text="Como ultilizar o Kahoot" />
      <Card text="Dicas para o Ensino Hibrido" />
      <Card text="Conheça a equipe" />
    </Row>
  </section>
);

export default ContainerNovidades;
