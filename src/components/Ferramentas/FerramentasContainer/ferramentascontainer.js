import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const FerramentasContainer = () => (
  <section className="componets-ferramentas-ferramentascontainer">
    <Row className="componets-ferramentas-ferramentascontainer__row">
      <Card
        id="kahoot"
        url="https://i.postimg.cc/tgdrdHBH/download.png"
        titulo="Kahoot"
        texto="O Kahoot é uma ferramenta gratuita que funciona como um
        quizz competitivo e induz o aluno a ser ativo no seu processo de
        aprendizagem."
      />
      <Card
        id="plickers"
        url="https://i.postimg.cc/PqqgqJtR/plickers.png"
        titulo="Plickers"
        texto="Plickers é uma ferramenta revolucionária que coleta imediatamente respostas de
        múltipla escolha de alunos, sem precisar que eles tenham diapositivos para votar, como
        computadores, tablets ou smartphones"
      />
      <Card
        id="gsuite"
        url="https://i.postimg.cc/Rh1sdxSt/google.jpg"
        titulo="Ferramentas do G Suite"
        texto="As ferramentas G Site têm como objetivo facilitar o trabalho e a comunicação entre
        equipes. Algumas das principais ferramenas são listadas para o apoio à metodologia ativa"
      />
      <Card
        id="handtalk"
        url="https://i.postimg.cc/X7fSHtHQ/hnadtalkicon.png"
        titulo="Hand Talk"
        texto="Hand Talk é um aplicativo que facilita a comunicação e a inclusão de deficientes
        auditivos."
      />
    </Row>
  </section>
);

export default FerramentasContainer;
