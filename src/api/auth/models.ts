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
  info: string;
  name: string;
  hard: (string | string[])[];
  soft: string[];
}

export interface ICourse {
  id: string;
  name: string;
  semesters: number[];
  type: 'hard' | 'soft';
  hours: number;
  count: number;
  info: string;
  teacher: string;
}

export interface IDiscipline {
  hard: ICourse[];
  soft: ICourse[];
}

export interface ICourses {
  name: string;
  good: ICourse[];
  normal: ICourse[];
}

export interface ICoursesDto {
  good: ICourse[];
  normal: ICourse[];
  semester: number;
}

export interface IAvailableCourses {
  courses: ICourses[];
  semester: number;
}
