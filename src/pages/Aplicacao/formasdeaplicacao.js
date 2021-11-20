import React from 'react';
import NavBar from '../../components/NavBar/navbar';
import MyFooter from '../../components/Footer/footer';
import Colecoes from '../../components/FormasAplicacao/Colecoes/colecao';
import Header from '../../components/Header/header';

const FormasDeAplicacao = () => (
  <>
    <NavBar />
    <Header
      title="APLIQUE AS FERRAMENTAS TECNOLOGICAS NAS METODOLOGIAS ATIVAS"
      desc="Conheça e entenda como funciona as ferramentas tecnológicas digitais em prol das metodologias de
      aprendizagem ativa!"
    />
    <Colecoes />
    <MyFooter />
  </>
);

export default FormasDeAplicacao;
