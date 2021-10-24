import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';

import './style.css';

const ContainerNovidades = () => (
  <section className="components-ultimasnovidades-containernovidades">
    <h4 className="center-align">Ultimas novidades</h4>
    <Row>
      <Card
        url="https://i.postimg.cc/tgdrdHBH/download.png"
        src="/ferramentas/kahoot"
        text="Como ultilizar o Kahoot"
      />
      <Card
        url="/image/idea.png"
        src="/metodologias/ensinohibrido"
        text="Dicas para o Ensino Hibrido"
      />
      <Card url="/image/ifnmg.jpg" src="/equipe" text="Conheça a equipe" />
    </Row>
  </section>
);

export default ContainerNovidades;
