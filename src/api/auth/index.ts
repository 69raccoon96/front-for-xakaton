import { API } from '../index';
import { courserMapper } from './mappers';
import { IAvailableCourses, ICoursesDto, IDiscipline, ILogin, ITrajectory, ITrajectoryInfo, IUser } from './models';

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
    const { data } = await API.get<ITrajectory[]>('/percents', { params: { id } });

    return data;
  };

  getTrajectoryInfo = async (id: string): Promise<ITrajectoryInfo> => {
    const { data } = await API.get<ITrajectoryInfo>('/courseinfo', { params: { id } });

    return data;
  };

  getDisciplines = async (id: string): Promise<IDiscipline> => {
    const { data } = await API.get<IDiscipline>('/profile', { params: { id } });

    return data;
  };

  getAvailableCourses = async (id: string): Promise<IAvailableCourses> => {
    const { data } = await API.get<ICoursesDto>('/courseschoose', { params: { id } });

    return courserMapper(data);
  };

  setCourse = async (idSubject: string, idUser: string): Promise<void> => {
    await API.get('/addsubject', { params: { idUser, idSubject } });
  };
}

export { AuthService };
