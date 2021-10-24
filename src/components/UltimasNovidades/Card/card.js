import React from 'react';
import Col from 'react-materialize/lib/Col';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ ...children }) => (
  <Col className="center-align components-ultimasnovidades-card" l={4} s={12}>
    <div className="introducaometodologia-card__imagem">
      <img className="z-depth-2" src={children.url} alt={children.text} />
    </div>
    <p>{children.text}</p>
    <Link to={children.src} className="btn waves-effect">
      Saiba mais!
    </Link>
  </Col>
);

export default Card;
