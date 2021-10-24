import React, { useContext } from 'react';
import { Button } from 'react-materialize';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import { Link, useHistory } from 'react-router-dom';
import StoreContext from '../Store/context';
import './style.css';

const FerramentasDetalhadaTexto = ({ ...children }) => {
  const history = useHistory();
  const { setSearchAplication } = useContext(StoreContext);

  function goToMethodology() {
    setSearchAplication({ title: children.title });
    history.push('/aplicacao');
  }
  return (
    <section className="ferramentasdetalhadastexto">
      <Container>
        <Row className="ferramentasdetalhadastexto__conteudo">
          <div className="ferramentasdetalhadastexto__voltar">
            <Link to="/ferramentas">Voltar para as ferramentas</Link>
          </div>

          <h2>{children.titulo}</h2>

          {children.texto.map((paragrafos) => paragrafos)}

          <p>
            {`Para saber mais sobre as ferramentas tecnologicas que podem combinar com a ${children.titulo},   `}
            <Button
              style={{
                padding: '0',
                color: '#039be5',
                fontSize: '16px',
              }}
              flat
              node="button"
              onClick={goToMethodology}
            >
              <span>clique aqui.</span>
            </Button>
          </p>

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
            {children.referencia}
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default FerramentasDetalhadaTexto;
