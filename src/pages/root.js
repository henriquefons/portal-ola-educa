import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/home';
import Metodologia from './Metodologia/metodologia';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/metodologias" component={Metodologia} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Root;
