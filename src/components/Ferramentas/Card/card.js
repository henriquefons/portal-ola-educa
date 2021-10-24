import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-materialize/lib/Col';
import './style.css';
import Row from 'react-materialize/lib/Row';

const Card = ({ ...children }) => (
  <Col l={4} m={6} s={12} className="component-ferramentas-card">
    <div className="z-depth-3 component-ferramentas-card__content">
      <Row center>
        <Col s={4} className="component-ferramentas-card__imagem">
          <img alt={children.alt} src={children.url} />
        </Col>
        <Col className="component-ferramentas-card__titulo" s={8}>
          {children.titulo}
        </Col>
      </Row>
      <p className="component-ferramentas-card__text">{children.texto}</p>
      <Link
        to={`/ferramentas/${children.id}`}
        className="btn waves-effect component-ferramentas-card__button"
      >
        Conheça mais!
      </Link>
    </div>
  </Col>
);

export default Card;
