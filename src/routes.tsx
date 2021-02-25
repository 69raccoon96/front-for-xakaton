import React from 'react';

import { Switch, Route, useHistory } from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Paths } from './shared/defaults';

const Routes = () => {
  const history = useHistory();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) {
    history.push(Paths.Login);
  }

  return (
    <Switch>
      <Route exact path={Paths.Home} component={Home} />
      <Route exact path={Paths.Login} component={Login} />
    </Switch>
  );
};

export { Routes };
