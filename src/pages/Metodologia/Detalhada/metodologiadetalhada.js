import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/navbar';
import MyFooter from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';
import MetodologiaDetalhadaTexto from '../../../components/MetodologiaDetalhada/metodologiadetalhada';

const MetodologiaDetalhada = () => {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <Header
        title="CONHEÇA AS MELHORES METODOLOGIAS ATIVAS"
        desc="O melhor jeito de aprender metodologias de aprendizagem ativa de uma forma descontraida"
      />
      {id === 'instrucaoempares' && (
        <MetodologiaDetalhadaTexto
          titulo="Instrução em pares ou Peer Instruction"
          voltar="Voltar para as metodologias"
          endereco="/metodologias"
          texto={[
            <p>
              A metodologia Peer Instruction (Instrução por Pares ou por
              Colegas) consiste em criar um espaço colaborativo, em que os
              alunos debatem conceitos e elaboram seus próprios pontos de vistas
              a respeito de um assunto, tornando-se agentes no processo de
              ensino-aprendizagem. Segundo Mazur (2013), essa metodologia se
              fundamenta em quatro bases: autonomia do estudante, trabalho em
              equipe, princípios de aprendizagem e contexto de aprendizado.
              Esses conceitos são aplicados conforme os passos descritos na
              Figura 1.
            </p>,
            <div className="center align-center">
              <p>
                <strong>
                  Figura 1 – Método para aplicação da metodologia Peer
                  Instruction
                </strong>
              </p>
              <img
                src="/image/peerinstruction.png"
                alt="Peer Instruction ou Instrução em pares"
              />
              <p className="left-align">Fonte: Silva (2019)</p>
            </div>,
            <p>
              Com base nas informações da Figura 1 e segundo Silva (2019), a
              metodologia Peer Instruction funciona da seguinte forma, o
              professor:
            </p>,
            <ul className="metodologiadetalhadastexto__lista">
              <li>
                faz uma rápida explicação sobre o assunto, entre 10 a 15
                minutos;
              </li>
              <li>elabora as questões a serem aplicadas;</li>
              <li>obtém os dados das questões respondidas;</li>
              <li>
                se o resultado for menor que 30%, revisa o conteúdo e volta a
                aplicar o teste;
              </li>
              <li>
                se o resultado for menor que entre 30% e 70%, irá incentivar os
                alunos a discutir em grupos ou pares entre 10 a 15 minutos.
                Nessa etapa, os alunos debatem o significado e importância das
                questões e cada um argumenta sobre o motivo e o porquê da
                resposta na pergunta. Com isso, todos os alunos são engajados na
                construção do conhecimento;
              </li>
              <li>
                se o resultado for maior que 70%, faz uma breve explicação e
                passa para o próximo conteúdo;
              </li>
              <li>
                após o final da metodologia, reúne os alunos para um Feedback.
              </li>
            </ul>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 27 de janeiro de 2021"
          atualizado=""
          referencia={[
            <p>
              MAZUR, E. Peer Instruction: Pearson New International Edition: A
              User’s Manual. Pearson Education Limited, 2013. ISBN
              9781292054346. Disponível em:
              &lt;https://books.google.com.br/books?id=2UipBwAAQBAJ&gt;.
            </p>,
            <p>
              SILVA, D. F. da. A metodologia ativa Peer Instruction e o uso do
              aplicativo Socrative: possibilidades de aprendizagem no curso
              técnico de Marketing. Dissertação (Mestrado) — Universidade do
              Oeste Paulista, Presidente prudente, 2019.
            </p>,
          ]}
        />
      )}
      {id === 'ensinohibrido' && (
        <MetodologiaDetalhadaTexto
          titulo="Ensino Hibrido ou Flipped Classroom"
          voltar="Voltar para as metodologias"
          endereco="/metodologias"
          texto={[
            <p>
              A metodologia Flipped Classroom, ou sala de aula invertida, propõe
              basicamente uma ligação entre momentos presenciais e outros a
              distância, de autoestudo, utilizando as Tecnologias de Informação
              e Comunicação (TIC). Cabe ao aluno, no horário não esco- lar,
              realizar um estudo prévio dos conteúdos disponibilizados pelo
              professor ou por suas próprias fontes de pesquisa. Após se
              preparar, o estudante poderá ter na sala de aula atividades como
              discussão, elaboração própria, análise, síntese e aplicação do
              conteúdo, sempre conduzidas por problematizações (RODRIGUES et
              al., 2019).
            </p>,
            <p>
              O Ensino Híbrido, ou Blended Learning, também foi possível ser
              desenvolvido ao longo dos avanços das TICs. Além de agrupar o uso
              de vários mecanismos e formas de ensinar, o Ensino Híbrido tem
              foco em conciliar características do ensino a distância e o ensino
              presencial. Em geral, essa metodologia de aprendizagem consiste em
              aplicar os estudos em um Ambiente Virtual de Aprendizagem (AVA) ou
              pelo portal do docente e depois, na aula presencial, já com os
              conhecimentos previamente adquiridos, o professor irá explicar o
              conteúdo passado. Dessa forma, o aluno não passa horas na sala de
              aula recebendo conteúdo e fica apto a aplicar seu conhecimento em
              uma atividade prática (SPINARDI; BOTH, 2018).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 27 de janeiro de 2021"
          atualizado=""
          referencia={[
            <p>
              RODRIGUES, L. et al. Metodologias ativas: Sala de aula invertida -
              um novo jeito de aprender. Revista Mundi Engenharia, Tecnologia e
              Gestão (ISSN: 2525-4782), v. 4, 03 2019.
            </p>,
            <p>
              SPINARDI, J. D.; BOTH, I. J. Blended learning: o ensino híbrido e
              a avaliação da aprendizagem no ensino superior. Boletim Técnico do
              Senac, v. 44, n. 1, mar. 2018.
            </p>,
          ]}
        />
      )}
      {id === 'gamificacao' && (
        <MetodologiaDetalhadaTexto
          titulo="Gamificação ou Gamification"
          voltar="Voltar para as metodologias"
          endereco="/metodologias"
          texto={[
            <p>
              A metodologia Gamification (Gamificação) utiliza jogos digitais
              (games em inglês, termo como são conhecidos) como ferramentas para
              potencializar aprendizagens em diver- sas áreas do conhecimento
              (AZEVEDO, 2012). Portanto, é a utilização de elementos dos jogos,
              com a finalidade de mobilizar os sujeitos à ação, auxiliar na
              solução de problemas e promover a aprendizagem (KAPP, 2012).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 27 de janeiro de 2021"
          atualizado=""
          referencia={[
            <p>
              AZEVEDO, V. d. A. Jogos eletrônicos e educação: Construindo um
              roteiro para a sua análise pedagógica. Renote – Novas Tecnologias
              na Educação, UFRGS, v. 10, 2012. Disponível em:
              &lt;https://seer.ufrgs.br/renote/article/view/36409&gt;.
            </p>,
            <p>
              KAPP, K. M. The Gamification of Learning and Instruction:
              Game-Based Methods and Strategies for Training and Education. 1st.
              ed. [S.l.]: Pfeiffer Company, 2012. ISBN 1118096347.
            </p>,
          ]}
        />
      )}
      <MyFooter />
    </>
  );
};

export default MetodologiaDetalhada;
