import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import FerramentasContainer from '../../components/Ferramentas/FerramentasContainer/ferramentascontainer';
import MyFooter from '../../components/Footer/footer';
import Header from '../../components/Header/header';

const Ferramentas = () => (
  <>
    <NavBar />
    <Header
      title="CONHEÇA FERRAMENTAS PARA AUXILIAR NA APLICAÇÃO DE METODOLOGIAS ATIVAS"
      desc="Descubra e aprenda diversas ferramentas tecnológicas para impulsionar o uso das metodologias de aprendizagem ativas"
    />
    <FerramentasContainer />
    <MyFooter />
  </>
);

export default Ferramentas;
