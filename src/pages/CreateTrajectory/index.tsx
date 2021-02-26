import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { runInAction, toJS } from 'mobx';

import { IBreadcrumbItem } from '../../shared/components/Breadcrumb/models';
import { Paths } from '../../shared/defaults';
import { SPageWrapper, SText, STitle } from '../styles';
import { Breadcrumb } from '../../shared/components/Breadcrumb';
import { SButton, SList, SListItem } from './styles';
import { ListedAccordion } from '../../shared/components/ListedAccordion';
import { useAppStore } from '../../mobx';
import { ICourse, ICourses } from '../../api/auth/models';
import { CourseModal } from './CourseModal';
import plus from '../../media/images/decorative/plus.svg';

const CreateTrajectory: React.FC = () => {
  const [courses, setCourses] = useState<ICourses[]>([]);
  const [semester, setSemester] = useState<number>(0);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const { store } = useAppStore();

  const breadcrumbSequence: IBreadcrumbItem[] = [
    {
      title: 'Личный кабинет',
      url: Paths.Home,
    },
    {
      title: 'Составление траектории',
      url: Paths.Disciplines,
    },
  ];

  useEffect(() => {
    (async function getCourses() {
      await store.setAvailableCourses();
      const data = runInAction(() => toJS(store.courses));
      setSemester(data?.semester || 0);
      setCourses(data?.courses || []);
    })();
  }, [store]);

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const openModal = (course: ICourse) => () => {
    setSelectedCourse(course);
  };

  return (
    <SPageWrapper>
      <CourseModal isOpen={Boolean(selectedCourse)} course={selectedCourse} onClose={closeModal} />
      <Breadcrumb sequence={breadcrumbSequence} />
      <STitle>Составление траектории</STitle>
      <SText>
        Ваша траектория должна быть выстроена с прицелом на профессию (
        <Link to={Paths.Trajectories}>основные траектории</Link>)
      </SText>
      {courses.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === courses.length - 1;

        return (
          <ListedAccordion
            key={item.name}
            title={item.name}
            isFirst={isFirst}
            isLast={isLast}
            disabled={index + 1 < semester}
            content={
              <>
                <SList isGood>
                  {item.good.map(goodItem => (
                    <SListItem key={goodItem.id}>
                      {goodItem.name}
                      <SButton onClick={openModal(goodItem)}>
                        <img src={plus} alt='plus' />
                      </SButton>
                    </SListItem>
                  ))}
                </SList>
                <SList isLast={isLast}>
                  {item.normal.map(normalItem => (
                    <SListItem key={normalItem.id}>
                      {normalItem.name}
                      <SButton onClick={openModal(normalItem)}>
                        <img src={plus} alt='plus' />
                      </SButton>
                    </SListItem>
                  ))}
                </SList>
              </>
            }
          />
        );
      })}
    </SPageWrapper>
  );
};

export { CreateTrajectory };
