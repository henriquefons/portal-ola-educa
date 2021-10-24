import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import { dataMethodology } from '../../../data';
import './style.css';

const ContainerList = () => (
  <section className="conhecaasmet-containerlist">
    <h4 className="center-align">
      Conheça as metodologias de aprendizagem ativas
    </h4>
    <Row>
      {dataMethodology.map((value) => (
        <Card
          key={value.id}
          url={value.url}
          detalhar={value.moreInfo}
          alt={value.title}
          text={value.title}
        />
      ))}
    </Row>
  </section>
);

export default ContainerList;
