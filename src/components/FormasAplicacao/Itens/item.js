import React from 'react';
import Col from 'react-materialize/lib/Col';
import Row from 'react-materialize/lib/Row';
import { Link } from 'react-router-dom';
import './style.css';

const ItemColecao = ({ ...children }) => (
  <Row className="z-depth-1 formasdeaplicacao-itens">
    <Col m="2" s="12" className="formasdeaplicacao-itens__img">
      <img
        src={children.conteudo.img} // "https://i.postimg.cc/Rh1sdxSt/google.jpg "
        alt="Ferramentas do G Suite"
      />
    </Col>
    <Col m="8" s="12" className="formasdeaplicacao-itens__lista">
      <ul>
        <li>
          <strong>{children.conteudo.nome}</strong>
        </li>
        <li>
          Acesse a pagina oficial:{' '}
          <a href={children.conteudo.siteoficial}>{children.conteudo.nome}</a>
        </li>
        <li>
          <Link to={children.conteudo.saibamais}>
            <span>{children.conteudo.comoaplicar}</span>
          </Link>
        </li>
      </ul>
    </Col>
    <Col m="2" s="12" className="formasdeaplicacao-itens__like">
      <p>Gostei!</p>
    </Col>
  </Row>
);

export default ItemColecao;