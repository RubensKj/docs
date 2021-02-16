import React from 'react';

// Header
import Header from './Header';

// Route
import Router from './Router';

// Styles
import GlobalStyles from './Styles/global';

const Core: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Router />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default Core;