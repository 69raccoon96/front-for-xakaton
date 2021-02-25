export interface ILogin {
  login: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  group: number;
  name: string;
  surname: string;
  status: 'student' | 'admin';
  username: string;
}

export interface ITrajectory {
  id: string;
  name: string;
  percent: number;
}

export interface ITrajectoryInfo {
  id: string;
  name: string;
  hard: string[] | string[][];
  soft: string[];
}

export interface IDiscipline {
  id: string;
  name: string;
  hard: string[] | string[][];
  soft: string[];
}
