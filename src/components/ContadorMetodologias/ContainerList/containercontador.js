import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const ContainerContador = () => (
  <section className="components-contadormet-containerlist">
    <Container>
      <h4 className="center">
        O portal Olá Educa disponibiliza para a comunidade:
      </h4>
      <Row>
        <Card title="Metodologias de apredizagem ativas" count="3" />
        <Card title="Ferramentas tecnologicas digitais" count="12" />
      </Row>
    </Container>
  </section>
);

export default ContainerContador;
