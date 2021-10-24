import React, { useContext, useEffect, useState } from 'react';
import TextInput from 'react-materialize/lib/TextInput';
import Col from 'react-materialize/lib/Col';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import './style.css';
import FormasAplicacaoCard from '../Card/Card';
import { dataTools } from '../../../data';
import StoreContext from '../../Store/context';

const initialSearchAplication = {
  title: '',
  methodology: '',
};

const Colecoes = () => {
  const { searchAplication, setSearchAplication } = useContext(StoreContext);
  const [data, setData] = useState(dataTools);

  const [values, setValues] = useState(initialSearchAplication);

  const filterFataTools = (name, value) => {
    console.log(name, value);
    const dataFilter = dataTools.filter((tool) =>
      tool[name].toLowerCase().includes(value.toLowerCase()),
    );
    setData(dataFilter);
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
    filterFataTools(name, value);
  };

  useEffect(() => {
    if (searchAplication) {
      setValues({ ...initialSearchAplication, ...searchAplication });
      filterFataTools(
        Object.keys(searchAplication)[0],
        Object.values(searchAplication)[0],
      );
    }
    return () => {
      setSearchAplication(null);
    };
    // eslint-disable-next-line
  }, [searchAplication]);

  return (
    <section className="formasdeaplicacao-colecoes">
      <Container className="formasdeaplicacao-colecoes__item">
        <p className="filter-text">Filtrar</p>
        <Row>
          <Col m={4} s={6}>
            <TextInput
              value={values.title}
              name="title"
              label="Nome da ferramenta"
              placeholder="Insira o nome da ferramenta"
              onChange={onChange}
            />
          </Col>
          <Col m={4} s={6}>
            <TextInput
              value={values.methodology}
              name="methodology"
              label="Nome da metodololgia"
              placeholder="Insira o nome da metodologia"
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="formas-aplicacao-colecoes__formater-cards">
          <p className="filter-text">Instrução em pares</p>
          {data.map(
            (value) =>
              value.methodology === 'Instrução em pares' && (
                <FormasAplicacaoCard
                  key={value.id}
                  img={value.img}
                  title={value.title}
                  moreInfo={value.moreInfo}
                  methodology={value.methodology}
                  officialSite={value.officialSite}
                />
              ),
          )}
        </Row>
        <Row className="formas-aplicacao-colecoes__formater-cards">
          <p className="filter-text">Ensino Hibrido</p>
          {data.map(
            (value) =>
              value.methodology === 'Ensino Hibrido' && (
                <FormasAplicacaoCard
                  key={value.id}
                  img={value.img}
                  title={value.title}
                  moreInfo={value.moreInfo}
                  methodology={value.methodology}
                  officialSite={value.officialSite}
                />
              ),
          )}
        </Row>
        <Row className="formas-aplicacao-colecoes__formater-cards">
          <p className="filter-text">Gamificação</p>
          {data.map(
            (value) =>
              value.methodology === 'Gamificação' && (
                <FormasAplicacaoCard
                  key={value.id}
                  img={value.img}
                  title={value.title}
                  moreInfo={value.moreInfo}
                  methodology={value.methodology}
                  officialSite={value.officialSite}
                />
              ),
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Colecoes;
