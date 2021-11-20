import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import Header from '../../components/Header/header';
import MyFooter from '../../components/Footer/footer';
import About from '../../components/About/About';

const Sobre = () => (
  <>
    <NavBar />
    <Header
      title="CONHEÇA UM POUCO SOBRE O PROJETO"
      desc="Saiba sobre a historia e que estaá por tras deste projeto originou- se de um TCC"
    />
    <About />
    <MyFooter />
  </>
);

export default Sobre;
