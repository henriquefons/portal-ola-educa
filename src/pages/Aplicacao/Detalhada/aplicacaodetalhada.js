import React from 'react';
import { useParams } from 'react-router-dom';
import MyFooter from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';
import MetodologiaDetalhadaTexto from '../../../components/MetodologiaDetalhada/metodologiadetalhada';
import NavBar from '../../../components/NavBar/navbar';

const AplicacaoDetalhada = () => {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <Header
        title="APLIQUE AS FERRAMENTAS TECNOLOGICAS NAS METODOLOGIAS ATIVAS"
        desc="Conheça e entenda como funciona as ferramentas tecnologicas digitais em prol das metodologias de
      aprendizagem ativa!"
      />
      {id === 'plickres' && (
        <MetodologiaDetalhadaTexto
          titulo="Plickes: aplique a metodologia Instrução em pares"
          voltar="Voltar para as formas de aplicação"
          endereco="/aplicacao"
          texto={[
            <p>
              Plickers é uma ferramenta revolucionária que coleta imediatamente
              respostas demúltipla escolha de alunos, sem precisar que eles
              tenham diapositivos para votar, comocomputadores, tablets ou
              smartphones (PLICKERS, 2020).
            </p>,
            <p>
              No video a seguir, é msotrado passo a passo como utilizar a
              ferramentas Plickers junto a metodologia Instrução em pares
            </p>,
            <iframe
              title="Portal Olá Educa - Utilizando a ferramenta Socrative à metodologia Instrução em Pares!"
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/Pu_ohjJcLnQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 13 de março de 2021"
          atualizado=""
          referencia={[
            <p>
              PLICKERS, T.What is Plickers?2020. Disponível em:
              &lt;https://help.plickers.com/hc/en-us/articles/360009395854-What-is-Plickers&gt;.
              Acesso em: 03 de outubro de 2020.
            </p>,
          ]}
        />
      )}
      {id === 'socrative' && (
        <MetodologiaDetalhadaTexto
          titulo="Socrative: aplique a metodologia Instrução em pares"
          voltar="Voltar para as formas de aplicação"
          endereco="/aplicacao"
          texto={[
            <p>
              O aplicativo Socrative auxilia o professor em sala de aula,
              possibilitando o engajamento e incentivando a participação do
              aluno, que é dada por meio de avaliações dinâmicas com análise do
              resultado de forma rápida e em tempo real. A grande vantagem é que
              economiza o tempo do professor ao avaliar uma tarefa e possibilita
              atender rapidamente as necessidades da turma (PALANCA; RACHEL,
              2020).
            </p>,
            <p>
              No video a seguir, é msotrado passo a passo como utilizar a
              ferramentas Socrative junto a metodologia Instrução em pares
            </p>,
            <iframe
              title="Portal Olá Educa - Utilizando a ferramenta Plickers à metodologia Instrução em Pares!"
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/Pu_ohjJcLnQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 13 de março de 2021"
          atualizado=""
          referencia={[
            <p>
              PALANCA, C.; RACHEL. Advice and answers from the Socrative Team.
              2020. Disponível em: &lt;https://help.socrative.com/en/&gt;.
              Acesso em: 01 de dezembro de 2020.
            </p>,
          ]}
        />
      )}
      {id === 'kahoot' && (
        <MetodologiaDetalhadaTexto
          titulo="Kahoot: aplique a metodologia Instrução em pares"
          voltar="Voltar para as formas de aplicação"
          endereco="/aplicacao"
          texto={[
            <p>
              No video a seguir, é msotrado passo a passo como utilizar a
              ferramentas Kahoot junto a metodologia Instrução em pares
            </p>,
            <iframe
              title="Tutorial: Gamificação com Kahoot"
              width="100%"
              height="520"
              src="https://www.youtube.com/embed/Ch66EiLSj1I?list=LL"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />,
          ]}
          autor="Prof. Eder Bento"
          publicado="Publicado em 28 de maio de 2020"
          atualizado=""
          referencia={[
            <p>
              Bento, Eder. Prof. Eder Bento. 2020. Disponível em:
              &lt;https://www.youtube.com/channel/UCv-Si75SEs1Mi2o9890zu_Q&gt;.
              Acesso em: 13 de março de 2021.
            </p>,
          ]}
        />
      )}
      <MyFooter />
    </>
  );
};

export default AplicacaoDetalhada;
