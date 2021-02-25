import React from 'react';

import { Routes } from './routes';
import { GlobalStyles } from './styles';
import { Menu } from './shared/components/Menu';
import { AppProvider } from './mobx';

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Menu />
      <Routes />
    </AppProvider>
  );
};

export default App;
