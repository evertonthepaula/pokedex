import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../services/history';

import Dashboard from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';
import NotFound from '../pages/NotFound';

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/pokemon/:id" component={Pokemon} exact />

      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);
