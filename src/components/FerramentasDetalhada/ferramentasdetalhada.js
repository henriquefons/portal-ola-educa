import React from 'react';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import './style.css';

const FerramentasDetalhadaTexto = ({ ...children }) => (
  <section className="ferramentasdetalhadastexto">
    <Container>
      <Row className="ferramentasdetalhadastexto__conteudo">
        <h2>{children.titulo}</h2>

        {children.texto.map((paragrafos) => (
          <p>{paragrafos}</p>
        ))}

        <div className="ferramentasdetalhadastexto__publicacao">
          <span>
            Por <strong>{children.autor}</strong>
          </span>
          <br />
          <span>{children.publicado}</span>
          <br />
          <span>{children.atualizado}</span>
        </div>

        <div className="ferramentasdetalhadastexto__referencias">
          <p>{children.referencia}</p>
        </div>
      </Row>
    </Container>
  </section>
);

export default FerramentasDetalhadaTexto;
