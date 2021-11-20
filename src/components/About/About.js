import React from 'react';
import { Col, Row } from 'react-materialize';
import Container from 'react-materialize/lib/Container';

const About = () => (
  <section className="formasdeaplicacao-colecoes">
    <Container className="formasdeaplicacao-colecoes__item">
      <Row>
        <Col s={12}><p className="filter-text">Oque é o Portal Olá Educa</p></Col>
        <Col s={12}><p className="filter-text">Qual a missão do Portal</p></Col>
        <Col s={12}><p className="filter-text">Equipe</p></Col>
      </Row>
    </Container>
  </section>
);

export default About;
