import React, { useContext } from 'react';

import { applyConfigure } from './config';
import { createAppStore } from './store';

applyConfigure();

const appStore = {
  store: createAppStore(),
};

const AppContext = React.createContext(appStore);

const AppProvider: React.FC = ({ children }) => {
  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

const useAppStore = () => useContext(AppContext);

export { AppProvider, useAppStore };
