import React from 'react';

import { Link } from 'react-router-dom';

import { IBreadcrumbItem } from '../../shared/components/Breadcrumb/models';
import { Paths } from '../../shared/defaults';
import { SPageWrapper, SText, STitle } from '../styles';
import { Breadcrumb } from '../../shared/components/Breadcrumb';

const CreateTrajectory: React.FC = () => {
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

  return (
    <SPageWrapper>
      <Breadcrumb sequence={breadcrumbSequence} />
      <STitle>Составление траектории</STitle>
      <SText>
        Ваша траектория должна быть выстроена с прицелом на профессию (
        <Link to={Paths.Trajectories}>основные траектории</Link>)
      </SText>
    </SPageWrapper>
  );
};

export { CreateTrajectory };
