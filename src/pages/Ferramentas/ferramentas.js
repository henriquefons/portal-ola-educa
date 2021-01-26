import React from 'react';
import FerramentasContainer from '../../components/Ferramentas/FerramentasContainer/ferramentascontainer';
import MyFooter from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navbar';

const Ferramentas = () => (
  <>
    <NavBar />
    <Header
      title="CONHEÇA FERRAMENTAS PARA AUXILIAR EM METODOLOGIAS ATIVAS"
      desc="Descubra e aprenda diversas ferramentas tecnologicas para impulsionar o uso das metodologias de aprendizagem ativas"
    />
    <FerramentasContainer />
    <MyFooter />
  </>
);

export default Ferramentas;
