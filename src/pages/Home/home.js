import React from 'react';
import ContainerList from '../../components/ConhecaAsMet/ContainerList/containerlist';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navbar';
import ComponentParallax from '../../components/Parallax/parallax';

const Home = () => (
  <>
    <NavBar />
    <Header
      title="DESCUBRA NOVAS TECNOLOGIAS E REVOLUCIONE AS TURMAS"
      desc="Explore novas ferramentas tecnológicas digitais e turbine os resultados das metodologias de aprendizagem ativas"
    />
    <ContainerList />
    <ComponentParallax />
  </>
);

export default Home;
