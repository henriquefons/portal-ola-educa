import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-materialize/lib/Col';
import Row from 'react-materialize/lib/Row';
import './style.css';

const Card = () => (
  <Col l={3} m={6} s={12} className="component-ferramentas-card">
    <div className="z-depth-3 component-ferramentas-card__content center">
      <Row className="center">
        <Col s={6}>Imagem</Col>
        <Col s={6}>Titulo</Col>
      </Row>
      <p>Conteudo</p>
      <Link
        to="/ferramentas"
        className="btn waves-effect component-ferramentas-card__button"
      >
        Conheça mais!
      </Link>
    </div>
  </Col>
);

export default Card;
