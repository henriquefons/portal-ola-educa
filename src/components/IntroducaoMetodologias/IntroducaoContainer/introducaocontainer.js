import React from 'react';
import Container from 'react-materialize/lib/Container';
import Card from '../Card/card';
import './style.css';

const IntroducaoMetodologia = () => (
  <section className="introducaometodologia-card">
    <Container className="introducaometodologia-card__card">
      <Card
        coluna1=""
        coluna2=""
        url="Imagem!!"
        titulo="Instrução em pares"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero
        lorem, blandit at convallis pretium, consectetur maximus sem. Maecenas
        eu sem non arcu rutrum pulvinar. Aenean tristique sagittis odio. Aliquam
        laoreet scelerisque neque, vel rutrum urna sollicitudin scelerisque.
        Fusce commodo cursus libero, vel vehicula nunc consequat vel. Praesent
        turpis tellus, egestas eget lacus sit amet, euismod semper lacus."
      />
      <Card
        coluna1="push-m7"
        coluna2="pull-m5"
        url="Imagem!!"
        titulo="Ensino Hibrido"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero
        lorem, blandit at convallis pretium, consectetur maximus sem. Maecenas
        eu sem non arcu rutrum pulvinar. Aenean tristique sagittis odio. Aliquam
        laoreet scelerisque neque, vel rutrum urna sollicitudin scelerisque.
        Fusce commodo cursus libero, vel vehicula nunc consequat vel. Praesent
        turpis tellus, egestas eget lacus sit amet, euismod semper lacus."
      />
      {/* Card Invertido */}
      <Card
        coluna1=""
        coluna2=""
        url="Imagem!!"
        titulo="Gamificação"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero
        lorem, blandit at convallis pretium, consectetur maximus sem. Maecenas
        eu sem non arcu rutrum pulvinar. Aenean tristique sagittis odio. Aliquam
        laoreet scelerisque neque, vel rutrum urna sollicitudin scelerisque.
        Fusce commodo cursus libero, vel vehicula nunc consequat vel. Praesent
        turpis tellus, egestas eget lacus sit amet, euismod semper lacus."
      />
    </Container>
  </section>
);

export default IntroducaoMetodologia;
