import React from 'react';
import Col from 'react-materialize/lib/Col';
import './style.css';

const Card = ({ ...children }) => (
  <Col s={12} className="center-align components-contadormet-card">
    <h4>{children.count}</h4>
    <h5>{children.title}</h5>
  </Col>
);

export default Card;
