import React from 'react';
import Container from 'react-materialize/lib/Container';
import ConteudoColecao from '../Conteudo/conteudo';
import './style.css';

const Colecoes = () => (
  <section className="formasdeaplicacao-colecoes">
    <Container className="formasdeaplicacao-colecoes__item">
      <ConteudoColecao
        titulo="Instrução em pares"
        conteudo={[
          {
            img: 'https://i.postimg.cc/PqqgqJtR/plickers.png',
            nome: 'Plickers',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Plickers Instrução em pares',
          },
          {
            img: 'https://i.postimg.cc/tgdrdHBH/download.png',
            nome: 'Kahoot',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Kahoot na Instrução em pares',
          },
          {
            img: 'https://i.postimg.cc/BbVjzPbQ/socrativeicon.jpg',
            nome: 'Socrative',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Socrative na Instrução em pares',
          },
        ]}
      />
      <ConteudoColecao
        titulo="Ensino Hibrido"
        conteudo={[
          {
            img: 'https://i.postimg.cc/Rh1sdxSt/google.jpg',
            nome: 'Ferramentas do G Suite',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar Ferramentas G Suite no Ensino Hibrido',
          },
          {
            img: 'https://i.postimg.cc/FzRfGV9B/moodleicon.png',
            nome: 'Moodle',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Moodle no Ensino Hibrido',
          },
        ]}
      />
      <ConteudoColecao
        titulo="Gamificação"
        conteudo={[
          {
            img: 'https://i.postimg.cc/PqqgqJtR/plickers.png',
            nome: 'Plickers',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Plickers Gamificação',
          },
          {
            img: 'https://i.postimg.cc/tgdrdHBH/download.png',
            nome: 'Kahoot',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Kahoot na Gamificação',
          },
          {
            img: 'https://i.postimg.cc/ydngFbzR/expeditionsicon.png',
            nome: 'Expeditions',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o Expeditions na Gamificação',
          },
          {
            img: 'https://i.postimg.cc/NGJ2FSDq/lightbot.png',
            nome: 'LightBot',
            siteoficial: '',
            saibamais: '',
            comoaplicar: 'Como aplicar o LightBot na Gamificação',
          },
        ]}
      />
    </Container>
  </section>
);

export default Colecoes;
