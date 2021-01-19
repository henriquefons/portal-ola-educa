import React from 'react';
import Col from 'react-materialize/lib/Col';
import './style.css';

const Card = ({ ...children }) => (
  <Col className="center-align components-contadormet-card" m={6} s={12}>
    <h5>{children.title}</h5>
    <h5>{children.count}</h5>
  </Col>
);

export default Card;
