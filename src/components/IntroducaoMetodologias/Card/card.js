import React from 'react';
import Col from 'react-materialize/lib/Col';
import Row from 'react-materialize/lib/Row';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ ...children }) => (
  <Row>
    <Col
      m={5}
      className={`center ${children.coluna1} introducaometodologia-card__imagem`}
    >
      <div>{children.url}</div>
    </Col>
    <Col
      m={7}
      className={`center ${children.coluna2} } introducaometodologia-card__texto`}
    >
      <h5>{children.titulo}</h5>
      <p>{children.texto}</p>
      <Link
        to={`/metodologias${children.detalhar}`}
        className="btn waves-effect"
      >
        Saiba mais!
      </Link>
    </Col>
  </Row>
);

export default Card;
