import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar/navbar';
import FerramentasDetalhadaTexto from '../../../components/FerramentasDetalhada/ferramentasdetalhada';
import MyFooter from '../../../components/Footer/footer';
import Header from '../../../components/Header/header';

const FerramentasDetalhada = () => {
  const { title } = useParams();

  return (
    <>
      <NavBar />
      <Header
        title="CONHEÇA FERRAMENTAS PARA AUXILIAR NA APLICAÇÃO DE METODOLOGIAS ATIVAS"
        desc="Tudo que você precisa saber para aplicar em suas metodologias"
      />
      {title === 'plickres' && (
        <FerramentasDetalhadaTexto
          title="Plickers"
          titulo="Plickers: desafie seus alunos!"
          texto={[
            <p>
              Plickers é uma ferramenta revolucionária que coleta imediatamente
              respostas de múltipla escolha de alunos, sem precisar que eles
              tenham diapositivos para votar, como computadores, tablets ou
              smartphones (PLICKERS, 2020).
            </p>,
            <p>
              Isso só é possível acontecer graças a um cartão expresso de design
              exclusivo para cada discente. A leitura do cartão é feita pelo
              professor usando um aplicativo mobile, que tem suporte nas
              plataformas iOS e Android. Assim que a câmera do aplicativo faz a
              leitura do cartão, a pergunta é feita de forma instantânea e
              permite que os alunos respondam em tempo real (PLICKERS, 2020).
            </p>,
            <p>
              O Plickers permite que o docente avalie de forma descontraída seus
              alunos e os estimula a compartilharem o que sabem. Também é
              possível analisar os resultados e rendimentos dos alunos para
              lidar com os erros e adaptar as instruções (PLICKERS, 2020).
            </p>,
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
          title="Kahoot"
          titulo="Kahoot: desafie seus alunos!"
          texto={[
            <p>
              O Kahoot é uma ferramenta gratuita que funciona como um quizz
              competitivo e induz o aluno a ser ativo no seu processo de
              aprendizagem. Essa ferramenta permite que o aluno estude por meio
              de testes de perguntas e respostas, de forma divertida e dinâmica
              (LEAL et al., 2020).
            </p>,
            <p>
              O Kahoot pode ser usado de forma assíncrona e síncrona, sendo que
              a primeira funciona em atividades disponibilizadas pelo professor
              e cada aluno dá as respostas no seu tempo, dentro de um período
              preestabelecido. Já a segunda forma é comumente utilizada na sala
              de aula, em que os alunos respondem em tempo real, pelo computador
              ou celular, às perguntas que o professor concede (LEAL et al.,
              2020).
            </p>,
            <p>
              A utilização do Kahoot é ideal para cursos de graduação, quando de
              especialização. Pode ser trazido para revisar conteúdos e,
              principalmente, em períodos letivos nos quais o estudante está
              cansado e desmotivado (LEAL et al., 2020).
            </p>,
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
          title="Ferramentas do G Suite"
          titulo="Ferramentas do G Suite: o popular que dá certo"
          texto={[
            <p>
              As ferramentas G Site têm como objetivo facilitar o trabalho e a
              comunicação entre equipes (GOOGLE, 2020b). A seguir, são listadas
              as principais ferramentas utilizadas para o apoio à metodologia
              ativa:
            </p>,
            <ul>
              <li>
                <strong>Google Sala de Aula:</strong> Uma ferramenta simples e
                fácil de usar, que ajuda os profes- sores a gerenciarem e
                distribuírem suas tarefas, atividades, notas e enviar feedbacks
                (GOOGLE, 2020c). <br />O grande diferencial dessa ferramenta é a
                capacidade de cumprir tarefas administra- tivas com eficiência,
                melhorar a gestão de aprendizagem com uma ótima experiência,
                trabalhar e acessar a ferramenta em qualquer lugar com um
                dispositivo e propor- cionar um feedback mais detalhado aos
                alunos para dar conselhos e ensinamentos construtivos (GOOGLE,
                2020c).
              </li>
              <br />
              <li>
                <strong>Drive:</strong> Ferramenta para armazenar e acessar todo
                o conteúdo em arquivos e pastas de qualquer dispositivo móvel,
                tablet ou computador. O Drive pode ser integrado com outros
                aplicativos do Google, como Planilhas, Documentos e
                Apresentações. Tudo pode ser usado em tempo real, para melhorar
                a eficiência e colaboração (GOOGLE, 2020d).
              </li>
              <br />
              <li>
                <strong>Gmail:</strong> É uma ferramenta que possibilita
                realizar uma comunicação assíncrona de modo rápido, eficaz e
                abrangente para ser utilizado em diferentes dispositivos tec-
                nológicos. Com a possibilidade de criar, armazenar, organizar e
                enviar e-mails, é fácil realizar a gestão do trabalho para o
                professor se manter organizado. Pode ser utilizado de modo
                off-line como grande diferencial, sendo que, quando conectado
                com a internet, ele é sincronizado (MACEDO, 2020).
              </li>
              <br />
              <li>
                <strong>Google Meet:</strong> O Google Meet é uma ferramenta que
                disponibiliza a realização de reuniões, chamadas e ligações por
                videoconferência por meio de vários dispositivos. Pode ser usado
                de forma ilimita
              </li>
            </ul>,
            <p>
              Várias funções do Google Meet facilitam o trabalho do professor ao
              realizar uma aula por videoconferência, tais como a possibilidade
              de poder compartilhar a tela com os participantes, trocar
              mensagens com os participantes, controlar o som, fixar ou remover
              participantes para os organizadores da reunião (GOOGLE, 2020e).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado=""
          atualizado=""
          referencia=""
        />
      )}
      {title === 'handtalk' && (
        <FerramentasDetalhadaTexto
          title="Hand Talk"
          titulo="Hand Talk"
          texto={[
            <p>
              Hand Talk é um aplicativo que facilita a comunicação e a inclusão
              de deficientes auditivos. Este software traduz mensagem de áudio,
              texto e imagens para a linguagem de libras. Para aumentar a
              acessibilidade, existe a versão mobile, a qual traduz os conteúdos
              de sites e falas (TALK, 2020).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia="TALK, H. Sobre a Hand Talk. 2020. Disponível em: <http://www.handtalk.me/br/
          sobre>. Acesso em: 01 de dezembro de 2020."
        />
      )}
      {title === 'moodle' && (
        <FerramentasDetalhadaTexto
          title="Moodle"
          titulo="Moodle"
          texto={[
            <p>
              O Moodle é um sistema gratuito e sem taxas de licenciamento que
              tem o código aberto para a criação de cursos on-line. Pode ser
              conhecido também por um Ambiente Virtual de Aprendizagem (AVA),
              que é muito utilizado por professores e seus alunos como
              ferramenta de suporte ao Ensino a Distância (EaD) em mais de 220
              países. Essa ferramenta pode ser usada por universidades públicas
              e privadas, escolas de idiomas e centros de treinamento
              corporativo (LOUBAK, 2019).
            </p>,
            <p>
              O objetivo principal do Moodle é oferecer suporte à educação a
              distância, tendo como recursos principais o upload de videoaulas
              (não muito comum devido ao custo de produção aos vídeos), fóruns e
              chats. Os professores podem publicar conteúdos e propor assuntos
              para discussões, aprofundando o assunto abordado em materiais
              didáticos. Os chats funcionam como uma sala de bate-papo, o qual é
              um espaço ideal para sanar as dúvidas com os docentes (LOUBAK,
              2019).
            </p>,
            <p>
              O Moodle é uma plataforma completamente adaptável e tem como
              vantagem uma forte comunidade internacional impulsionando a
              colaboração aberta e o suporte à comunidade. O Moodle é sempre
              atualizado para correção de bugs e lançando melhorias, tornando-o
              atualizado e alinhado às tendências tecnológicas (MOODLE, 2020).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia={[
            <p>
              LOUBAK, A. L. Afinal, o que é Moodle? 2019. Disponível em:
              &lt;https://ctead.ifpa.edu.br/noticias/544-afinal-o-que-e-moodle&gt;.
              Acesso em: 03 de outubro de 2020.
            </p>,
            <p>
              MOODLE, A. About Moodle. 2020. Disponível em:
              &lt;https://docs.moodle.org/39/en/ About_Moodle&gt;. Acesso em: 03
              de outubro de 2020.
            </p>,
          ]}
        />
      )}
      {title === 'expedicoes' && (
        <FerramentasDetalhadaTexto
          title="Expedicoes"
          titulo="Expedicoes"
          texto={[
            <p>
              Expedições ou Expeditions, é uma ferramenta do Google que permite
              que alunos aprendam com a realidade virtual (RV) e a realidade
              aumentada (RA). Com esses dois tipos de tecnologia, o professor
              não fica limitado ao espaço da sala de aula (GOOGLE, 2020a).
            </p>,
            <p>
              A RV possibilita a exploração do mundo virtualmente, enquanto a RA
              dá vida aos conceitos abstratos, formando- se assim uma coleção de
              cenas em 360o e objetos em 3D. Por meio disso, são destacados
              lugares e itens revelantes presentes nos tours e proporcionadas a
              imaginação e a criatividade dos alunos (GOOGLE, 2020a).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia={[
            <p>
              GOOGLE. Dê vida às aulas com o Expedições. 2020. Disponível em:
              &lt;https://edu.google.com/intl/pt-BR/products/vr-ar/expeditions&gt;.
              Acesso em: 06 de outubro de 2020.
            </p>,
          ]}
        />
      )}
      {title === 'socrative' && (
        <FerramentasDetalhadaTexto
          title="Socrative"
          titulo="Socrative"
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
              O aplicativo possibilita a realização de aulas ao vivo, realizando
              perguntas instantâneas e retornando feedbacks imediatos. É
              possível criar enquetes, questionários ou qualquer tipo de
              atividade que se encaixem nas necessidades do professor (PALANCA;
              RACHEL, 2020).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
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
      {title === 'lightbot' && (
        <FerramentasDetalhadaTexto
          title="Light Bot"
          titulo="Light Bot"
          texto={[
            <p>
              LightBot é um jogo disponível para navegadores e aplicativos
              mobile, cuja proposta é instruir um robô, oferecendo algumas
              instruções para resolver o objetivo, à medida que o aluno tenta
              &quot;resolver&quot; os problemas com uma pequena quantidade de
              comandos (GOMES, 2009).
            </p>,
            <p>
              É aí que o jogo se torna ainda mais interessante e entra a
              concepção de função (ou sub-rotinas) no jogo. Esse conceito faz
              com que o aluno possa combinar instruções para economizar nos seus
              comandos (GOMES, 2009).
            </p>,
            <p>
              O objetivo deste jogo é fazer com que o aluno desenvolva
              características de lógica, raciocínio, estratégias que se devem
              traçar para se chegar ao objetivo. As instruções fazem o papel dos
              comandos de uma linguagem de programação e criam lógicas
              algorítmicas (GOMES, 2009).
            </p>,
          ]}
          autor="Henrique Fonseca"
          publicado="Publicado em 23 de janeiro de 2021"
          atualizado=""
          referencia={[
            <p>
              GOMES, A. Light bot: aprenda a programar jogando. 2009. Disponível
              em:
              &lt;http://blog.brasilacademico.com/2009/12/light-bot-aprenda-programar-jogando.html&gt;.
              Acesso em: 06 de outubro de 2020.
            </p>,
          ]}
        />
      )}
      <MyFooter />
    </>
  );
};

export default FerramentasDetalhada;
