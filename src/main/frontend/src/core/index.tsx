import React from 'react';

// Header
import Header from './Header';

// Route
import Router from './Router';

// Styles
import GlobalStyles from './Styles/global';

const Core: React.FC = () => {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyles />
    </>
  );
}

export default Core;