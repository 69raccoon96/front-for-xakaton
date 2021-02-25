import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Paths } from './shared/defaults';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={Paths.Home} component={Home} />
    </Switch>
  );
};

export { Routes };
