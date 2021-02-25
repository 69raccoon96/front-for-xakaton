import { API } from '../index';
import { IDiscipline, ILogin, ITrajectory, ITrajectoryInfo, IUser } from './models';

class AuthService {
  login = async (requestData: ILogin): Promise<IUser> => {
    const { data } = await API.post<IUser>('/login', requestData);

    return data;
  };

  logout = async (): Promise<void> => {
    await API.post('/logout', {});
  };

  sessionUpdate = async (): Promise<void> => {
    await API.patch('/session', {});
  };

  getTrajectories = async (id: string): Promise<ITrajectory[]> => {
    const { data } = await API.get('/percents', { params: { id } });

    return data;
  };

  getTrajectoryInfo = async (id: string): Promise<ITrajectoryInfo> => {
    const { data } = await API.get('/courseinfo', { params: { id } });

    return data;
  };

  getDisciplines = async (id: string): Promise<IDiscipline> => {
    const { data } = await API.get('/profile', { params: { id } });

    return data;
  };
}

export { AuthService };
