import React from 'react';
import Col from 'react-materialize/lib/Col';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ ...children }) => (
  <Col className="center-align conhecaasmet-card" s={12} m={4}>
    <div className="conhecaasmet-card__imagem">
      <img className="z-depth-2" src={children.url} alt={children.alt} />
    </div>
    <Link
      to={`/metodologias/${children.detalhar}`}
      className="btn-small waves-effect"
    >
      {children.text}
    </Link>
  </Col>
);

export default Card;
