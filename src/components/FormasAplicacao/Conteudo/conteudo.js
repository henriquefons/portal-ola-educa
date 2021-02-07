import React from 'react';
import ItemColecao from '../Itens/item';
import './style.css';

const ConteudoColecao = ({ ...children }) => (
  <div className="formasdeaplicacao-item__conteudo z-depth-2">
    <h4>{children.titulo} </h4>
    {children.conteudo.map((conteudo) => (
      <ItemColecao conteudo={conteudo} />
    ))}
  </div>
);

export default ConteudoColecao;
