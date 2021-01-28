import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FerramentasDetalhada from './Ferramentas/Detalhadas/ferramentasdetalahda';
import Ferramentas from './Ferramentas/ferramentas';
import Home from './Home/home';
import MetodologiaDetalhada from './Metodologia/Detalhada/metodologiadetalhada';
import Metodologia from './Metodologia/metodologia';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/ferramentas/:title" component={FerramentasDetalhada} />
      <Route path="/ferramentas" component={Ferramentas} />
      <Route path="/metodologias/:id" component={MetodologiaDetalhada} />
      <Route path="/metodologias" component={Metodologia} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Root;
