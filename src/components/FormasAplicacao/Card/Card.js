import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-materialize/lib/Col';
import Card from 'react-materialize/lib/Card';
import CardTitle from 'react-materialize/lib/CardTitle';
import Icon from 'react-materialize/lib/Icon';
import './style.css';

const FormasAplicacaoCard = ({ ...children }) => (
  <Col l={3} m={4} s={12}>
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={children.img} reveal waves="light" />}
      reveal={
        <div>
          <p>
            {`Aprenda a usar o ${children.title} junto com a metodologia de aprendizagem ativa `}
            <span className="text-weight-8">{children.methodology}</span>
          </p>
          <p>
            Ir para o site oficial do{' '}
            <a
              target="_blank|_self|_parent|_top|framename"
              href={children.officialSite}
            >
              {children.title}
            </a>
          </p>
        </div>
      }
      revealIcon={<Icon>more_vert</Icon>}
      title={children.title}
    >
      <p>
        <Link to={`/aplicacao/${children.moreInfo}`}>
          <span>Aprenda a usar!</span>
        </Link>
      </p>
    </Card>
  </Col>
);

export default FormasAplicacaoCard;
