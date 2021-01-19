import React from 'react';
import ContainerList from '../../components/ConhecaAsMet/ContainerList/containerlist';
import ContainerContador from '../../components/ContadorMetodologias/ContainerList/containercontador';
import MyFooter from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navbar';
import UltimasNovidades from '../../components/UltimasNovidades/ContainerNovidades/containernovidades';
// import ComponentParallax from '../../components/Parallax/parallax';
import './style.css';

const Home = () => (
  <>
    <NavBar />
    <Header
      title="DESCUBRA NOVAS TECNOLOGIAS E REVOLUCIONE AS TURMAS"
      desc="Explore novas ferramentas tecnológicas digitais e turbine os resultados das metodologias de aprendizagem ativas"
    />
    <ContainerList />
    <ContainerContador />
    <UltimasNovidades />
    <MyFooter />
  </>
);

export default Home;
