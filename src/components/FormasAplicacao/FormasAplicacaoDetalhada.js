import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import { Link } from 'react-router-dom';

const FormasAplicacaoDetalhada = ({ ...children }) => (
  <section className="metodologiadetalhadastexto">
    <Container>
      <Row className="metodologiadetalhadastexto__conteudo">
        <div className="metodologiadetalhadastexto__voltar">
          <Link to="/aplicacao">Voltar para as formas aplicação</Link>
        </div>

        <h2>{`${children.title}: aplique a metodologia ${children.methodology}`}</h2>

        <p>{children.texto}</p>

        <p>
          {`No video a seguir, é mostrado passo a passo como utilizar a
          ferramenta ${children.title} junto a metodologia ${children.methodology}.
          Para saber mais sobre a ferramenta, `}
          <Link to={`/ferramentas/${children.moreInfo}`}>
            <span>clique aqui.</span>
          </Link>
        </p>

        {children.srcVideo && (
          <iframe
            title={children.titleVideo}
            width="100%"
            height="520"
            src={children.srcVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        <div className="metodologiadetalhadastexto__publicacao">
          <span>
            Por <strong>{children.autor}</strong>
          </span>
          <br />
          <span>{children.publicado}</span>
          <br />
          <span>{children.atualizado}</span>
        </div>

        <div className="metodologiadetalhadastexto__referencias">
          {children.referencia}
        </div>
      </Row>
    </Container>
  </section>
);

export default FormasAplicacaoDetalhada;
