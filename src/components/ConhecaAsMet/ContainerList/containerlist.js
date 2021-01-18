import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const ContainerList = () => (
  <section className="conhecaasmet-containerlist">
    <Container>
      <h4 className="center-align">
        Conheça as metodologias de aprendizagem ativas
      </h4>
      <Row>
        <Card text="Ensino Hibrido" />
        <Card text="Instrução em Pares" />
        <Card text="Gamificação" />
      </Row>
    </Container>
  </section>
);

export default ContainerList;
