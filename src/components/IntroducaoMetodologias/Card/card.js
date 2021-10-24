import React from 'react';
import Col from 'react-materialize/lib/Col';
import Row from 'react-materialize/lib/Row';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ ...children }) => (
  <Row className="introducao-metodologia-card">
    <Col
      m={5}
      className={`center ${
        children.invertCard && 'push-m7'
      } introducaometodologia-card__coluna1`}
    >
      <div className="introducaometodologia-card__imagem">
        <img className="z-depth-2" src={children.url} alt={children.alt} />
      </div>
    </Col>
    <Col
      m={7}
      className={`center ${
        children.invertCard && 'pull-m5'
      } introducaometodologia-card__texto`}
    >
      <h5>{children.titulo}</h5>
      <p>{children.texto}</p>
      <Link
        to={`/metodologias/${children.detalhar}`}
        className="btn waves-effect"
      >
        Saiba mais!
      </Link>
    </Col>
  </Row>
);

export default Card;
