import React from 'react';
import MyFooter from '../../components/Footer/footer';
import Colecoes from '../../components/FormasAplicacao/Colecoes/colecao';
import Header from '../../components/Header/header';

const FormasDeAplicacao = () => (
  <>
    <Header
      title="APLIQUE AS FERRAMENTAS TECNOLOGICAS NAS METODOLOGIAS ATIVAS"
      desc="Conheça e entenda como funciona as ferramentas tecnologicas digitais em prol das metodologias de
      aprendizagem ativa!"
    />
    <Colecoes />
    <MyFooter />
  </>
);

export default FormasDeAplicacao;
