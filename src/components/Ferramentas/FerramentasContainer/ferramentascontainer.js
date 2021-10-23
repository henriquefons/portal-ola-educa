import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import Card from '../Card/card';
import './style.css';

const FerramentasContainer = () => (
  <section className="componets-ferramentas-ferramentascontainer">
    <Container className="introducaometodologia-card__card">
      <Row className="componets-ferramentas-ferramentascontainer__row">
        <Card
          id="kahoot"
          alt="Kahoot"
          url="https://i.postimg.cc/tgdrdHBH/download.png"
          titulo="Kahoot"
          texto="O Kahoot é uma ferramenta gratuita que funciona como um
        quizz competitivo e induz o aluno a ser ativo no seu processo de
        aprendizagem."
        />
        <Card
          id="plickers"
          alt="Plickers"
          url="https://i.postimg.cc/PqqgqJtR/plickers.png"
          titulo="Plickers"
          texto="Plickers é uma ferramenta inovadora que coleta imediatamente respostas de
        múltipla escolha de alunos, sem precisar que eles tenham dispositivos tecnologicos para votar"
        />
        <Card
          id="gsuite"
          alt="Ferramentas do G Suite"
          url="https://i.postimg.cc/Rh1sdxSt/google.jpg"
          titulo="Ferramentas do G Suite"
          texto="As ferramentas G Site têm como objetivo facilitar o trabalho e a comunicação entre
        equipes. Algumas das principais ferramenas são listadas para o apoio à metodologia ativa"
        />
        <Card
          id="handtalk"
          alt="Hand Talk"
          url="https://i.postimg.cc/X7fSHtHQ/hnadtalkicon.png"
          titulo="Hand Talk"
          texto="Hand Talk é um aplicativo que facilita a comunicação e a inclusão de deficientes
        auditivos."
        />
      </Row>
      <Row>
        <Card
          id="moodle"
          alt="Moodle"
          url="https://i.postimg.cc/FzRfGV9B/moodleicon.png"
          titulo="Moodle"
          texto="O Moodle é muito utilizado por professores e seus alunos
        como ferramenta de suporte ao Ensino a Distância (EaD)"
        />
        <Card
          id="expedicoes"
          alt="Expedições"
          url="https://i.postimg.cc/ydngFbzR/expeditionsicon.png"
          titulo="Expedições"
          texto="Expedições ou Expeditions, é uma ferramenta do Google que permite que alunos
        aprendam com a realidade virtual (RV) e a realidade aumentada (RA)"
        />
        <Card
          id="lightbot"
          alt="LightBot"
          url="https://i.postimg.cc/NGJ2FSDq/lightbot.png"
          titulo="LightBot"
          texto="LightBot é um jogo disponível para navegadores e aplicativos mobile, cuja proposta
        é instruir um robô oferecendo algumas instruções para resolver o objetivo"
        />
        <Card
          id="socrative"
          alt="Socrative"
          url="https://i.postimg.cc/BbVjzPbQ/socrativeicon.jpg"
          titulo="Socrative"
          texto="O aplicativo Socrative auxilia o professor em sala de aula, possibilitando o
        engajamento e incentivando a participação do aluno dada"
        />
      </Row>
    </Container>
  </section>
);

export default FerramentasContainer;
