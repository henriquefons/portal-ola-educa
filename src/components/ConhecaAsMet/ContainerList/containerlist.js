import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const ContainerList = () => (
  <section className="conhecaasmet-containerlist">
    <h4 className="center-align">
      Conheça as metodologias de aprendizagem ativas
    </h4>
    <Row>
      <Card text="Ensino Hibrido" />
      <Card text="Instrução em Pares" />
      <Card text="Gamificação" />
    </Row>
  </section>
);

export default ContainerList;
