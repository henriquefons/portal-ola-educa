import React from 'react';
import Col from 'react-materialize/lib/Col';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ ...children }) => (
  <Col className="center-align conhecaasmet-card" s={12} m={4}>
    <div className="z-depth-">Imagem</div>
    <Link to="/" className="btn-small waves-effect">
      {children.text}
    </Link>
  </Col>
);

export default Card;
