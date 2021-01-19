import React from 'react';
import Col from 'react-materialize/lib/Col';
import './style.css';

const Card = ({ ...children }) => (
  <Col className="center-align components-contadormet-card" m={12}>
    <h5>{children.title}</h5>
    <h4>{children.count}</h4>
  </Col>
);

export default Card;
