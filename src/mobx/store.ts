import { makeAutoObservable, runInAction } from 'mobx';
import { AuthService } from '../api/auth';
import { IDiscipline, ILogin, ITrajectory, ITrajectoryInfo, IUser } from '../api/auth/models';

const createAppStore = () => {
  const authService = new AuthService();

  const userInfo: IUser | null = null;

  const trajectories: ITrajectory[] = [];

  const trajectoryInfo: ITrajectoryInfo | null = null;

  const disciplines: IDiscipline | null = null;

  return makeAutoObservable({
    userInfo: userInfo as IUser | null,
    async login(data: ILogin) {
      const info = await authService.login(data);
      runInAction(() => (this.userInfo = info));
    },

    async logout() {
      await authService.logout();
    },

    trajectories,
    async setTrajectories() {
      const data = await authService.getTrajectories(this.userInfo?.id || '');
      runInAction(() => (this.trajectories = data));
    },

    trajectoryInfo: trajectoryInfo as ITrajectoryInfo | null,
    async setTrajectoryInfo(id: string) {
      const data = await authService.getTrajectoryInfo(id);
      runInAction(() => (this.trajectoryInfo = data));
    },

    disciplines: disciplines as IDiscipline | null,
    async setDisciplines() {
      const data = await authService.getDisciplines(this.userInfo?.id || '');
      console.log(data);
      runInAction(() => (this.disciplines = data));
    },
  });
};

export { createAppStore };
