import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/navbar';
import MyFooter from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';
import MetodologiaDetalhadaTexto from '../../../components/MetodologiaDetalhada/metodologiadetalhada';
import { dataMethodology } from '../../../data';

const MetodologiaDetalhada = () => {
  const { id } = useParams();
  const [methodology, setMethodology] = useState();
  useEffect(() => {
    const data = dataMethodology.find((value) => value.moreInfo === id);
    setMethodology(data);
  }, [id]);

  return (
    <>
      <NavBar />
      <Header
        title="CONHEÇA AS MELHORES METODOLOGIAS ATIVAS"
        desc="O melhor jeito de aprender metodologias de aprendizagem ativa de uma forma descontraida"
      />
      {methodology && (
        <MetodologiaDetalhadaTexto
          key={methodology.id}
          titulo={methodology.titleDetail}
          title={methodology.title}
          texto={methodology.textDetail}
          autor={methodology.author}
          publicado={methodology.public}
          atualizado={methodology.updateText}
          referencia={methodology.reference}
        />
      )}
      <MyFooter />
    </>
  );
};

export default MetodologiaDetalhada;
