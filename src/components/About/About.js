import React from 'react';
import { Col, Row } from 'react-materialize';
import Container from 'react-materialize/lib/Container';
import AboutCard from './Cards/AboutCard';

const About = () => (
  <section className="formasdeaplicacao-colecoes">
    <Container className="formasdeaplicacao-colecoes__item">
      <Row>
        <Col s={12}>
          <p className="filter-text">Oque é o Portal Olá Educa</p>
          <p>Aqui vai a historia do portal</p>
        </Col>
        <Col s={12}>
          <p className="filter-text">Qual a missão do Portal</p>
          <p>Aqui vai o objetivo do portal</p>
        </Col>
        <Col s={12}>
          <p className="filter-text">Equipe</p>
          <AboutCard
            img="https://i.postimg.cc/vmj6zNpg/Henrique.jpg"
            title="Desenvolvedor Front-End, UX/UI"
            name="Henrique dos Santos Fonseca"
            email="henriquefons@hotmail.com"
          />
          <AboutCard
            img="https://i.postimg.cc/T1cwZ7Hc/blank-profile-picture-973460-480.png"
            title="Orientador de projeto, Product Owner"
            name="Alessandro Ribeiro"
            email="henriquefons@hotmail.com"
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
