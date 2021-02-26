import React from 'react';

import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { runInAction } from 'mobx';

import { Routes } from './routes';
import { GlobalStyles } from './styles';
import { Menu } from './shared/components/Menu';
import { AppProvider, useAppStore } from './mobx';
import { Paths } from './shared/defaults';

const App: React.FC = observer(() => {
  const history = useHistory();
  const { store } = useAppStore();

  if (!runInAction(() => store.userInfo?.id)) {
    history.push(Paths.Login);
  }

  return (
    <AppProvider>
      <GlobalStyles />
      <Menu />
      <Routes />
    </AppProvider>
  );
});

export default App;
