import { IAvailableCourses, ICourses, ICoursesDto } from './models';

export const courserMapper = (data: ICoursesDto): IAvailableCourses => {
  const result: ICourses[] = [];
  for (let i = 1; i < 9; i++) {
    result.push({
      name: `${i} семестр`,
      good: data.good.filter(goodCourse => goodCourse.semesters.includes(i)) || [],
      normal: data.normal.filter(goodCourse => goodCourse.semesters.includes(i)) || [],
    } as ICourses);
  }

  return { courses: result, semester: data.semester };
};
