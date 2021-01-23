import React from 'react';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const FerramentasContainer = () => (
  <section className="componets-ferramentas-ferramentascontainer">
    <Row className="componets-ferramentas-ferramentascontainer__row">
      <Card
        url="https://i.postimg.cc/tgdrdHBH/download.png"
        titulo="Kahoot"
        texto="O Kahoot é uma ferramenta gratuita que funciona como um quizz competitivo e induz o aluno a ser ativo no seu processo de aprendizagem. "
      />
      <Card
        url="https://i.postimg.cc/PqqgqJtR/plickers.png"
        titulo="Plickers"
        texto="O Kahoot é uma ferramenta gratuita que funciona como um quizz competitivo e induz o aluno a ser ativo no seu processo de aprendizagem. "
      />
      <Card
        url="https://i.postimg.cc/Rh1sdxSt/google.jpg"
        titulo="Ferramentas do G Suite"
        texto="O Kahoot é uma ferramenta gratuita que funciona como um quizz competitivo e induz o aluno a ser ativo no seu processo de aprendizagem. "
      />
      <Card
        url="https://i.postimg.cc/X7fSHtHQ/hnadtalkicon.png"
        titulo="Hand Talk"
        texto="O Kahoot é uma ferramenta gratuita que funciona como um quizz competitivo e induz o aluno a ser ativo no seu processo de aprendizagem. "
      />
    </Row>
  </section>
);

export default FerramentasContainer;
