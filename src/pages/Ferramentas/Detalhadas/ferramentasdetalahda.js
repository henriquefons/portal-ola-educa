import React from 'react';
import { useParams } from 'react-router-dom';
import FerramentasDetalhadaTexto from '../../../components/FerramentasDetalhada/ferramentasdetalahda';
import MyFooter from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';
import NavBar from '../../../components/NavBar/navbar';

const FerramentasDetalhada = () => {
  const { title } = useParams();

  return (
    <>
      <NavBar />
      <Header
        title="CONHEÇA FERRAMENTAS PARA AUXILIAR EM METODOLOGIAS ATIVAS"
        desc="Tudo que você precisa saber para aplicar em suas metodologias"
      />
      {title === 'plickers' && (
        <FerramentasDetalhadaTexto
          titulo="Plickes: desafie seus alunos!"
          texto={[
            `Plickers é uma ferramenta revolucionária que coleta imediatamente respostas de
          múltipla escolha de alunos, sem precisar que eles tenham diapositivos para votar, como
          computadores, tablets ou smartphones (PLICKERS, 2020).`,
            `Isso só é possível acontecer graças a um cartão expresso de design exclusivo para
            cada discente. A leitura do cartão é feita pelo professor usando um aplicativo mobile, que
            tem suporte nas plataformas iOS e Android. Assim que a câmera do aplicativo faz a leitura
            do cartão, a pergunta é feita de forma instantânea e permite que os alunos respondam
            em tempo real (PLICKERS, 2020).`,
            `O Plickers permite que o docente avalie de forma descontraída seus alunos e os
            estimula a compartilharem o que sabem. Também é possível analisar os resultados e
            rendimentos dos alunos para lidar com os erros e adaptar as instruções (PLICKERS,`,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia="PLICKERS, T. What is Plickers? 2020. Disponível em: <https://help.plickers.com/
          hc/en-us/articles/360009395854-What-is-Plickers>."
        />
      )}
      {title === 'kahoot' && (
        <FerramentasDetalhadaTexto
          titulo="Kahoot: desafie seus alunos!"
          texto={[
            `O Kahoot é uma ferramenta gratuita que funciona como um quizz competitivo e
          induz o aluno a ser ativo no seu processo de aprendizagem. Essa ferramenta permite que
          o aluno estude por meio de testes de perguntas e respostas, de forma divertida e dinâmica
          (LEAL et al., 2020).`,
            `O Kahoot pode ser usado de forma assíncrona e síncrona, sendo que a primeira
        funciona em atividades disponibilizadas pelo professor e cada aluno dá as respostas no seu
        tempo, dentro de um período preestabelecido. Já a segunda forma é comumente utilizada
        na sala de aula, em que os alunos respondem em tempo real, pelo computador ou celular,
        às perguntas que o professor concede (LEAL et al., 2020).`,
            `A utilização do Kahoot é ideal para cursos de graduação, quando de especialização.
      Pode ser trazido para revisar conteúdos e, principalmente, em períodos letivos nos quais
      o estudante está cansado e desmotivado (LEAL et al., 2020).`,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia="LEAL, E. A. et al. COMO USAR O KAHOOT!: SÍNCRONO E ASSÍNCRONO.
          2020. Disponível em: <https://gennegociosegestao.com.br/como-usar-o-kahoot>. Acesso
          em: 04 de outubro de 2020."
        />
      )}
      {title === 'gsuite' && (
        <FerramentasDetalhadaTexto
          titulo="Ferramentas do G Suite: o popular que dá certo"
          texto={[
            `As ferramentas G Site têm como objetivo facilitar o trabalho e a comunicação entre
          equipes (GOOGLE, 2020b). A seguir, são listadas as principais ferramentas utilizadas para
          o apoio à metodologia ativa:`,
            `Google Sala de Aula: Uma ferramenta simples e fácil de usar, que ajuda os profes-
          sores a gerenciarem e distribuírem suas tarefas, atividades, notas e enviar feedbacks
          (GOOGLE, 2020c).`,
            `O grande diferencial dessa ferramenta é a capacidade de cumprir tarefas administra-
          tivas com eficiência, melhorar a gestão de aprendizagem com uma ótima experiência,
          trabalhar e acessar a ferramenta em qualquer lugar com um dispositivo e propor-
          cionar um feedback mais detalhado aos alunos para dar conselhos e ensinamentos
          construtivos (GOOGLE, 2020c).`,
            `Drive: Ferramenta para armazenar e acessar todo o conteúdo em arquivos e pastas de
          qualquer dispositivo móvel, tablet ou computador. O Drive pode ser integrado com
          outros aplicativos do Google, como Planilhas, Documentos e Apresentações. Tudo
          pode ser usado em tempo real, para melhorar a eficiência e colaboração (GOOGLE,
          2020d).`,
            `Gmail: É uma ferramenta que possibilita realizar uma comunicação assíncrona de
          modo rápido, eficaz e abrangente para ser utilizado em diferentes dispositivos tec-
          nológicos. Com a possibilidade de criar, armazenar, organizar e enviar e-mails, é
          fácil realizar a gestão do trabalho para o professor se manter organizado. Pode ser
          utilizado de modo off-line como grande diferencial, sendo que, quando conectado
          com a internet, ele é sincronizado (MACEDO, 2020).`,
            `Google Meet: O Google Meet é uma ferramenta que disponibiliza a realização de
          reuniões, chamadas e ligações por videoconferência por meio de vários dispositivos.
          Pode ser usado de forma ilimita`,
            `Várias funções do Google Meet facilitam o trabalho do professor ao realizar uma
          aula por videoconferência, tais como a possibilidade de poder compartilhar a tela
          com os participantes, trocar mensagens com os participantes, controlar o som, fixar
          ou remover participantes para os organizadores da reunião (GOOGLE, 2020e).`,
          ]}
          autor="Henrique Fonseca"
          publicado=""
          atualizado=""
          referencia=""
        />
      )}
      {title === 'handtalk' && (
        <FerramentasDetalhadaTexto
          titulo="Hand Talk"
          texto={[
            `Hand Talk é um aplicativo que facilita a comunicação e a inclusão de deficientes
            auditivos. Este software traduz mensagem de áudio, texto e imagens para a linguagem de
            libras. Para aumentar a acessibilidade, existe a versão mobile, a qual traduz os conteúdos
            de sites e falas (TALK, 2020).`,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia="TALK, H. Sobre a Hand Talk. 2020. Disponível em: <http://www.handtalk.me/br/
          sobre>. Acesso em: 01 de dezembro de 2020."
        />
      )}
      <MyFooter />
    </>
  );
};

export default FerramentasDetalhada;
