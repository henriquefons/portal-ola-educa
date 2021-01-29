import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const ContainerList = () => (
  <section className="conhecaasmet-containerlist">
    <h4 className="center-align">
      Conheça as metodologias de aprendizagem ativas
    </h4>
    <Row>
      <Card
        url="/image/ensinohibrido.jpeg"
        detalhar="/ensinohibrido"
        alt="Ensino Hibrido"
        text="Ensino Hibrido"
      />
      <Card
        url="/image/peerinstruction.jpeg"
        detalhar="/instrucaoempares"
        alt="Instrução em Pares"
        text="Instrução em Pares"
      />
      <Card
        url="/image/gamificacaopic.png"
        detalhar="/gamificacao"
        alt="Gamificação"
        text="Gamificação"
      />
    </Row>
  </section>
);

export default ContainerList;
