import React from 'react';
import Container from 'react-materialize/lib/Container';
import Card from '../Card/card';
import './style.css';

const IntroducaoMetodologia = () => (
  <section className="introducaometodologia-card">
    <Container className="introducaometodologia-card__card">
      <Card
        url="/image/peerinstruction.jpeg"
        alt="Instrução em pares"
        titulo="Instrução em pares"
        texto="“O peer instruction é uma abordagem pedagógica
        que enfatiza os conceitos básicos, com alunos
        comprometendo-se a uma concepção, oferecendo
        um ambiente para a discussão com colegas e com
        professores, onde é chamada a atenção para as
        concepções erradas. A tecnologia por si só não
        é a pedagogia” (LASRY, 2008, p. 243)."
        detalhar="/instrucaoempares"
      />
      <Card
        coluna1="push-m7"
        coluna2="pull-m5"
        url="/image/ensinohibrido.jpeg"
        alt="Ensino Hibrido"
        titulo="Ensino Hibrido"
        texto="Segundo Horn e Staker (2015), o Ensino Híbrido
        (Blended Learning) mescla momentos em que
        o aluno estuda conteúdos e instruções utilizando
        recursos on-line e outros em que o ensino ocorre
        dentro da sala de aula, com interação entre
        alunos e professores. Durante as atividades
        online o aluno dispõe de meios para controlar
        quando, onde, como e com quem vai estudar."
        detalhar="/ensinohibrido"
      />
      {/* Card Invertido */}
      <Card
        url="/image/gamificacaopic.png"
        alt="Gamificação"
        titulo="Gamificação"
        texto="Proporcionar a experiência e a lógica de jogos para
        o ensino e no contexto educacional. É uma excelente forma
        de sair da rotina e criar um ambiente de
        trabalho divertido e competidor, o qual
        desenvolve o engajamento, motivação e
        espirito vencedor do aluno."
        detalhar="/gamificacao"
      />
    </Container>
  </section>
);

export default IntroducaoMetodologia;
