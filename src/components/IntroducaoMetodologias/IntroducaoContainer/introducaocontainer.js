import React from 'react';
import Container from 'react-materialize/lib/Container';
import Card from '../Card/card';
import { dataMethodology } from '../../../data';
import './style.css';

const IntroducaoMetodologia = () => (
  <section className="introducaometodologia-card">
    <Container className="introducaometodologia-card__card">
      {dataMethodology.map((value) => (
        <Card
          key={value.id}
          url={value.url}
          alt={value.title}
          titulo={value.title}
          texto={value.textSummary}
          detalhar={value.moreInfo}
          invertCard={value.id % 2 === 0}
        />
      ))}
    </Container>
  </section>
);

export default IntroducaoMetodologia;
