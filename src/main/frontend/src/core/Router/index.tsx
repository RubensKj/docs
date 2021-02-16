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
        <Route exact path='/docs' component={Docs} />
        <Route path='/docs/:documentationId/:pageId' component={GetStarted} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;