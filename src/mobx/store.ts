import { makeAutoObservable, runInAction } from 'mobx';

const createAppStore = () => {
  const isAuthenticated = false;

  return makeAutoObservable({
    isAuthenticated,

    setIsAuthenticated(newValue: boolean) {
      runInAction(() => (this.isAuthenticated = newValue));
    },
  });
};

export { createAppStore };
