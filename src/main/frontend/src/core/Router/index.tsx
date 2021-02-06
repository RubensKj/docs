import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../../code-docs/home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;