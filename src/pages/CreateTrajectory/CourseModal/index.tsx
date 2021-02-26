import React from 'react';

import { Modal } from '../../../shared/components/Modal';
import { ICourseModalProps } from './models';
import { SContentWrapper, SCourseInfo, SCourseName, SLink, STitle } from './styles';
import { Paths } from '../../../shared/defaults';
import { SButton } from '../../Login/styles';
import { useAppStore } from '../../../mobx';

const CourseModal: React.FC<ICourseModalProps> = ({ isOpen, onClose, course }) => {
  const { store } = useAppStore();

  const modalSubmit = async () => {
    if (course) {
      await store.sendCourse(course.id);
      onClose();
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <SContentWrapper>
        <STitle>Выбор дисциплины</STitle>
        <SCourseName>{course?.name}</SCourseName>
        <SCourseInfo>{course?.info}</SCourseInfo>
        <SLink to={`${Paths.Trajectories}/${course?.id}`} target='_blank'>
          Подробнее
        </SLink>
        <SButton onClick={modalSubmit}>Выбрать</SButton>
      </SContentWrapper>
    </Modal>
  );
};

export { CourseModal };
