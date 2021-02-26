import { makeAutoObservable, runInAction } from 'mobx';
import { AuthService } from '../api/auth';
import { IAvailableCourses, IDiscipline, ILogin, ITrajectory, ITrajectoryInfo, IUser } from '../api/auth/models';

const createAppStore = () => {
  const service = new AuthService();

  const userInfo: IUser | null = null;

  const trajectories: ITrajectory[] = [];

  const trajectoryInfo: ITrajectoryInfo | null = null;

  const disciplines: IDiscipline | null = null;

  const courses: IAvailableCourses | null = null;

  return makeAutoObservable({
    userInfo: userInfo as IUser | null,
    async login(data: ILogin) {
      const info = await service.login(data);
      runInAction(() => (this.userInfo = info));
    },

    async logout() {
      await service.logout();
    },

    trajectories,
    async setTrajectories() {
      if (this.userInfo) {
        const data = await service.getTrajectories(this.userInfo.id);
        runInAction(() => (this.trajectories = data));
      }
    },

    trajectoryInfo: trajectoryInfo as ITrajectoryInfo | null,
    async setTrajectoryInfo(id: string) {
      const data = await service.getTrajectoryInfo(id);
      runInAction(() => (this.trajectoryInfo = data));
    },

    disciplines: disciplines as IDiscipline | null,
    async setDisciplines() {
      if (this.userInfo) {
        const data = await service.getDisciplines(this.userInfo.id);
        runInAction(() => (this.disciplines = data));
      }
    },

    courses: courses as IAvailableCourses | null,
    async setAvailableCourses() {
      if (this.userInfo) {
        const data = await service.getAvailableCourses(this.userInfo.id);
        runInAction(() => (this.courses = data));
      }
    },

    async sendCourse(id: string) {
      if (this.userInfo) {
        await service.setCourse(id, this.userInfo.id);
      }
    },
  });
};

export { createAppStore };
