import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyFooter from '../../../components/Footer/footer';
import FormasAplicacaoDetalhada from '../../../components/FormasAplicacao/FormasAplicacaoDetalhada';
import Header from '../../../components/Header/header';
import NavBar from '../../../components/NavBar/navbar';
import { dataTools } from '../../../data';

const AplicacaoDetalhada = () => {
  const { id } = useParams();
  const [methodology, setMethodology] = useState();
  useEffect(() => {
    const data = dataTools.find((value) => value.moreInfo === id);
    setMethodology(data);
  }, [id]);
  return (
    <>
      <NavBar />
      <Header
        title="APLIQUE AS FERRAMENTAS TECNOLOGICAS NAS METODOLOGIAS ATIVAS"
        desc="Conheça e entenda como funciona as ferramentas tecnológicas digitais em prol das metodologias de
      aprendizagem ativa!"
      />
      {methodology && (
        <FormasAplicacaoDetalhada
          key={methodology.id}
          methodology={methodology.methodology}
          srcVideo={methodology.srcVideo}
          texto={methodology.textSummary}
          autor={methodology.authorVideo}
          publicado={methodology.public}
          atualizado={methodology.update}
          referencia={methodology.reference}
          title={methodology.title}
          titleVideo={methodology.titleVideo}
          aplicationVideo={methodology.aplicationVideo}
          moreInfo={methodology.moreInfo}
        />
      )}
      <MyFooter />
    </>
  );
};

export default AplicacaoDetalhada;
