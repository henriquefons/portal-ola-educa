import React from 'react';
import Col from 'react-materialize/lib/Col';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const ContainerContador = () => (
  <section className="components-contadormet-containerlist">
    <Container>
      <Row className="components-contadormet-containerlist__col">
        <Col m={7} s={12}>
          <h4 className="components-contadormet-containerlist__titulo">
            Atualmente, o portal Olá Educa disponibiliza para a comunidade:
          </h4>
        </Col>
        <Col m={5} s={0}>
          <Card title="Metodologias de apredizagem ativas" count="3" />
          <Card title="Ferramentas tecnológicas digitais" count="8" />
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContainerContador;
