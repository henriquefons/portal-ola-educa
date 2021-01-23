import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const FerramentasContainer = () => (
  <section className="componets-ferramentas-ferramentascontainer">
    <Row className="componets-ferramentas-ferramentascontainer__row">
      <Card />
      <Card />
      <Card />
      <Card />
    </Row>
  </section>
);

export default FerramentasContainer;
