import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import Header from '../../components/Header/header';
import IntroducaoMetodologia from '../../components/IntroducaoMetodologias/IntroducaoContainer/introducaocontainer';
import MyFooter from '../../components/Footer/footer';

const Metodologia = () => (
  <>
    <NavBar />
    <Header
      title="APRENDA SOBRE AS METODOLOGIAS DE APRENDIZAGEM ATIVAS"
      desc="O melhor jeito de aprender metodologias de aprendizagem ativa de uma forma descontraida"
    />
    <IntroducaoMetodologia />
    <MyFooter />
  </>
);

export default Metodologia;
