import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import { dataTools } from '../../../data';
import './style.css';

const FerramentasContainer = () => (
  <section className="componets-ferramentas-ferramentascontainer">
    <Container>
      <Row>
        {dataTools.map(
          (value) =>
            value.textSummary && (
              <Card
                id={value.moreInfo}
                alt={value.title}
                url={value.img}
                titulo={value.title}
                texto={value.textSummary}
              />
            ),
        )}
      </Row>
    </Container>
  </section>
);

export default FerramentasContainer;
