import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import './style.css';

const MetodologiaDetalhadaTexto = ({ ...children }) => (
  <section className="metodologiadetalhadastexto">
    <Container>
      <Row className="metodologiadetalhadastexto__conteudo">
        <h2>{children.titulo}</h2>

        {children.texto.map((paragrafos) => paragrafos)}

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

export default MetodologiaDetalhadaTexto;
