import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Docs from '../../code-docs/pages/docs';
import GetStarted from '../../code-docs/pages/starting';

// Home
import Home from '../../code-docs/pages/home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/docs' component={Docs} />
        <Route path='/get-started' component={GetStarted} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;