import React from 'react';

const dataTools = [
  {
    id: 1,
    img: 'https://i.postimg.cc/PqqgqJtR/plickers.png',
    srcVideo: 'https://www.youtube.com/embed/-t6ZusJ1ZOs',
    titleVideo: 'Plickes: aplique a metodologia Instrução em pares',
    authorVideo: 'Henrique Fonseca',
    public: 'Publicado em 27 de janeiro de 2021',
    title: 'Plickers',
    officialSite: 'https://get.plickers.com',
    moreInfo: 'plickres',
    methodology: 'Instrução em pares',
    color: '#162F52',
    reference: [
      <p>
        PLICKERS, T.What is Plickers?2020. Disponível em:
        &lt;https://help.plickers.com/hc/en-us/articles/360009395854-What-is-Plickers&gt;.
        Acesso em: 03 de outubro de 2020.
      </p>,
    ],
    textSummary:
      'Plickers é uma ferramenta inovadora que coleta imediatamente respostas de múltipla escolha de alunos, sem precisar que eles tenham dispositivos tecnologicos para votar',
  },
  {
    id: 2,
    img: 'https://i.postimg.cc/tgdrdHBH/download.png',
    srcVideo: 'https://www.youtube.com/embed/Ch66EiLSj1I?list=LL',
    titleVideo: 'Tutorial: Gamificação com Kahoot',
    public: 'Publicado em 27 de janeiro de 2021',
    authorVideo: 'Prof. Eder Bento',
    title: 'Kahoot',
    officialSite: 'https://kahoot.it',
    moreInfo: 'kahoot',
    methodology: 'Instrução em pares',
    color: '#162F52',
    reference: [
      <p>
        Bento, Eder. Prof. Eder Bento. 2020. Disponível em:
        &lt;https://www.youtube.com/channel/UCv-Si75SEs1Mi2o9890zu_Q&gt;. Acesso
        em: 13 de março de 2021.
      </p>,
    ],
    textSummary:
      'O Kahoot é uma ferramenta gratuita que funciona como um  quizz competitivo e induz o aluno a ser ativo no seu processo de aprendizagem.',
  },
  {
    id: 3,
    img: 'https://i.postimg.cc/BbVjzPbQ/socrativeicon.jpg',
    srcVideo: 'https://www.youtube.com/embed/Pu_ohjJcLnQ',
    titleVideo: 'Socrative: aplique a metodologia Instrução em pares',
    authorVideo: 'Henrique Fonseca',
    public: 'Publicado em 27 de janeiro de 2021',
    title: 'Socrative',
    moreInfo: 'socrative',
    officialSite: 'https://www.socrative.com',
    methodology: 'Instrução em pares',
    color: '#162F52',
    reference: [
      <p>
        PALANCA, C.; RACHEL. Advice and answers from the Socrative Team. 2020.
        Disponível em: &lt;https://help.socrative.com/en/&gt;. Acesso em: 01 de
        dezembro de 2020.
      </p>,
    ],
    textSummary:
      'O aplicativo Socrative auxilia o professor em sala de aula, possibilitando o engajamento e incentivando a participação do aluno dada',
  },
  {
    id: 4,
    img: 'https://i.postimg.cc/Rh1sdxSt/google.jpg',
    title: 'Ferramentas do G Suite',
    moreInfo: 'gsuite',
    officialSite: '',
    methodology: 'Ensino Hibrido',
    color: '#165223',
    textSummary:
      'As ferramentas G Site têm como objetivo facilitar o trabalho e a comunicação entre equipes. Algumas das principais ferramenas são listadas para o apoio à metodologia ativa',
  },
  {
    id: 5,
    img: 'https://i.postimg.cc/FzRfGV9B/moodleicon.png',
    title: 'Moodle',
    moreInfo: 'moodle',
    officialSite: '',
    methodology: 'Ensino Hibrido',
    color: '#165223',
    textSummary:
      'O Moodle é muito utilizado por professores e seus alunos como ferramenta de suporte ao Ensino a Distância (EaD)',
  },
  {
    id: 6,
    img: 'https://i.postimg.cc/PqqgqJtR/plickers.png',
    title: 'Plickers',
    moreInfo: 'plickers2',
    officialSite: '',
    methodology: 'Gamificação',
    color: '#55520E',
  },
  {
    id: 7,
    img: 'https://i.postimg.cc/tgdrdHBH/download.png',
    title: 'Kahoot',
    moreInfo: 'kahoot2',
    officialSite: '',
    methodology: 'Gamificação',
    color: '#55520E',
  },
  {
    id: 8,
    img: 'https://i.postimg.cc/ydngFbzR/expeditionsicon.png',
    title: 'Expedições',
    moreInfo: 'expedicoes',
    officialSite: '',
    methodology: 'Gamificação',
    color: '#55520E',
    textSummary:
      'Expedições ou Expeditions, é uma ferramenta do Google que permite que alunos aprendam com a realidade virtual (RV) e a realidade aumentada (RA).',
  },
  {
    id: 9,
    img: 'https://i.postimg.cc/NGJ2FSDq/lightbot.png',
    title: 'LightBot',
    moreInfo: 'lightbot',
    officialSite: '',
    methodology: 'Gamificação',
    color: '#55520E',
    textSummary:
      'LightBot é um jogo disponível para navegadores e aplicativos mobile, cuja proposta é instruir um robô oferecendo algumas instruções para resolver o objetivo.',
  },
  {
    id: 10,
    img: 'https://i.postimg.cc/X7fSHtHQ/hnadtalkicon.png',
    title: 'Hand Talk',
    moreInfo: 'handtalk',
    officialSite: '',
    methodology: 'Gamificação',
    color: '#55520E',
    textSummary:
      'Hand Talk é um aplicativo que facilita a comunicação e a inclusão de deficientes auditivos.',
  },
];

const dataMethodology = [
  {
    id: 1,
    url: '/image/ensinohibrido.jpeg',
    moreInfo: 'ensinohibrido',
    title: 'Ensino Hibrido',
    textSummary:
      'Segundo Horn e Staker (2015), o Ensino Híbrido (Blended Learning) mescla momentos em que o aluno estuda conteúdos e instruções utilizando recursos on-line e outros em que o ensino ocorre dentro da sala de aula, com interação entre alunos e professores. Durante as atividades online o aluno dispõe de meios para controlar quando, onde, como e com quem vai estudar.',
    titleDetail: 'Ensino Hibrido ou Flipped Classroom',
    textDetail: [
      <p>
        A metodologia Flipped Classroom, ou sala de aula invertida, propõe
        basicamente uma ligação entre momentos presenciais e outros a distância,
        de autoestudo, utilizando as Tecnologias de Informação e Comunicação
        (TIC). Cabe ao aluno, no horário não esco- lar, realizar um estudo
        prévio dos conteúdos disponibilizados pelo professor ou por suas
        próprias fontes de pesquisa. Após se preparar, o estudante poderá ter na
        sala de aula atividades como discussão, elaboração própria, análise,
        síntese e aplicação do conteúdo, sempre conduzidas por problematizações
        (RODRIGUES et al., 2019).
      </p>,
      <p>
        O Ensino Híbrido, ou Blended Learning, também foi possível ser
        desenvolvido ao longo dos avanços das TICs. Além de agrupar o uso de
        vários mecanismos e formas de ensinar, o Ensino Híbrido tem foco em
        conciliar características do ensino a distância e o ensino presencial.
        Em geral, essa metodologia de aprendizagem consiste em aplicar os
        estudos em um Ambiente Virtual de Aprendizagem (AVA) ou pelo portal do
        docente e depois, na aula presencial, já com os conhecimentos
        previamente adquiridos, o professor irá explicar o conteúdo passado.
        Dessa forma, o aluno não passa horas na sala de aula recebendo conteúdo
        e fica apto a aplicar seu conhecimento em uma atividade prática
        (SPINARDI; BOTH, 2018).
      </p>,
    ],
    author: 'Henrique Fonseca',
    public: 'Publicado em 27 de janeiro de 2021',
    updateText: '',
    reference: [
      <p>
        RODRIGUES, L. et al. Metodologias ativas: Sala de aula invertida - um
        novo jeito de aprender. Revista Mundi Engenharia, Tecnologia e Gestão
        (ISSN: 2525-4782), v. 4, 03 2019.
      </p>,
      <p>
        SPINARDI, J. D.; BOTH, I. J. Blended learning: o ensino híbrido e a
        avaliação da aprendizagem no ensino superior. Boletim Técnico do Senac,
        v. 44, n. 1, mar. 2018.
      </p>,
    ],
  },
  {
    id: 2,
    url: '/image/peerinstruction.jpeg',
    moreInfo: 'instrucaoempares',
    title: 'Instrução em Pares',
    textSummary:
      '“O peer instruction é uma abordagem pedagógica que enfatiza os conceitos básicos, com alunos comprometendo-se a uma concepção, oferecendo um ambiente para a discussão com colegas e com professores, onde é chamada a atenção para as concepções erradas. A tecnologia por si só não é a pedagogia” (LASRY, 2008, p. 243).',
    titleDetail: 'Instrução em pares ou Peer Instruction',
    textDetail: [
      <p>
        A metodologia Peer Instruction (Instrução por Pares ou por Colegas)
        consiste em criar um espaço colaborativo, em que os alunos debatem
        conceitos e elaboram seus próprios pontos de vistas a respeito de um
        assunto, tornando-se agentes no processo de ensino-aprendizagem. Segundo
        Mazur (2013), essa metodologia se fundamenta em quatro bases: autonomia
        do estudante, trabalho em equipe, princípios de aprendizagem e contexto
        de aprendizado. Esses conceitos são aplicados conforme os passos
        descritos na Figura 1.
      </p>,
      <div className="center align-center">
        <p>
          <strong>
            Figura 1 – Método para aplicação da metodologia Peer Instruction
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
        metodologia Peer Instruction funciona da seguinte forma, o professor:
      </p>,
      <ul className="metodologiadetalhadastexto__lista">
        <li>
          faz uma rápida explicação sobre o assunto, entre 10 a 15 minutos;
        </li>
        <li>elabora as questões a serem aplicadas;</li>
        <li>obtém os dados das questões respondidas;</li>
        <li>
          se o resultado for menor que 30%, revisa o conteúdo e volta a aplicar
          o teste;
        </li>
        <li>
          se o resultado for menor que entre 30% e 70%, irá incentivar os alunos
          a discutir em grupos ou pares entre 10 a 15 minutos. Nessa etapa, os
          alunos debatem o significado e importância das questões e cada um
          argumenta sobre o motivo e o porquê da resposta na pergunta. Com isso,
          todos os alunos são engajados na construção do conhecimento;
        </li>
        <li>
          se o resultado for maior que 70%, faz uma breve explicação e passa
          para o próximo conteúdo;
        </li>
        <li>após o final da metodologia, reúne os alunos para um Feedback.</li>
      </ul>,
    ],
    author: 'Henrique Fonseca',
    public: 'Publicado em 27 de janeiro de 2021',
    updateText: '',
    reference: [
      <p>
        MAZUR, E. Peer Instruction: Pearson New International Edition: A User’s
        Manual. Pearson Education Limited, 2013. ISBN 9781292054346. Disponível
        em: &lt;https://books.google.com.br/books?id=2UipBwAAQBAJ&gt;.
      </p>,
      <p>
        SILVA, D. F. da. A metodologia ativa Peer Instruction e o uso do
        aplicativo Socrative: possibilidades de aprendizagem no curso técnico de
        Marketing. Dissertação (Mestrado) — Universidade do Oeste Paulista,
        Presidente prudente, 2019.
      </p>,
    ],
  },
  {
    id: 3,
    url: '/image/gamificacaopic.png',
    moreInfo: 'gamificacao',
    title: 'Gamificação',
    textSummary:
      'Proporcionar a experiência e a lógica de jogos para o ensino e no contexto educacional. É uma excelente forma de sair da rotina e criar um ambiente de trabalho divertido e competidor, o qual desenvolve o engajamento, motivação e espirito vencedor do aluno.',
    titleDetail: 'Gamificação ou Gamificatio',
    textDetail: [
      <p>
        A metodologia Gamification (Gamificação) utiliza jogos digitais (games
        em inglês, termo como são conhecidos) como ferramentas para
        potencializar aprendizagens em diver- sas áreas do conhecimento
        (AZEVEDO, 2012). Portanto, é a utilização de elementos dos jogos, com a
        finalidade de mobilizar os sujeitos à ação, auxiliar na solução de
        problemas e promover a aprendizagem (KAPP, 2012).
      </p>,
    ],
    author: 'Henrique Fonseca',
    public: 'Publicado em 27 de janeiro de 2021',
    updateText: '',
    reference: [
      <p>
        AZEVEDO, V. d. A. Jogos eletrônicos e educação: Construindo um roteiro
        para a sua análise pedagógica. Renote – Novas Tecnologias na Educação,
        UFRGS, v. 10, 2012. Disponível em:
        &lt;https://seer.ufrgs.br/renote/article/view/36409&gt;.
      </p>,
      <p>
        KAPP, K. M. The Gamification of Learning and Instruction: Game-Based
        Methods and Strategies for Training and Education. 1st. ed. [S.l.]:
        Pfeiffer Company, 2012. ISBN 1118096347.
      </p>,
    ],
  },
];

export { dataTools, dataMethodology };
