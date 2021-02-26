import React, { useEffect, useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { runInAction, toJS } from 'mobx';

import { SPageWrapper, SText, STitle } from '../../styles';
import { ITrajectoryMatchParams } from './models';
import { useAppStore } from '../../../mobx';
import { IBreadcrumbItem } from '../../../shared/components/Breadcrumb/models';
import { Paths } from '../../../shared/defaults';
import { Breadcrumb } from '../../../shared/components/Breadcrumb';
import { ITrajectoryInfo } from '../../../api/auth/models';
import { SH2Title, SH3Title, SList, SListItem } from './styles';

const Trajectory: React.FC<RouteComponentProps<ITrajectoryMatchParams>> = observer(({ match }) => {
  const [info, setInfo] = useState<ITrajectoryInfo | null>(null);
  const { store } = useAppStore();
  const trajectoryId = match.params.id;

  useEffect(() => {
    (async function getTrajectoryInfo() {
      await store.setTrajectoryInfo(trajectoryId);
      setInfo(runInAction(() => toJS(store.trajectoryInfo)));
    })();
  }, [store, trajectoryId]);

  const breadcrumbSequence: IBreadcrumbItem[] = [
    {
      title: 'Личный кабинет',
      url: Paths.Home,
    },
    {
      title: 'Основные траектории',
      url: Paths.Trajectories,
    },
    {
      title: info?.name || '',
      url: `${Paths.Trajectories}/${trajectoryId}`,
    },
  ];

  return (
    <SPageWrapper>
      <Breadcrumb sequence={breadcrumbSequence} />
      <STitle>{info?.name}</STitle>
      <SText>{info?.info}</SText>
      <SH2Title>Все дисциплины</SH2Title>
      <SH3Title>Soft skills</SH3Title>
      <SList>
        {info?.soft.map(softSkill => (
          <SListItem key={softSkill}>- {softSkill}</SListItem>
        ))}
      </SList>
      <SH3Title>Hard skills</SH3Title>
      {info?.hard && (
        <SList>
          {info.hard.map(hardSkill =>
            Array.isArray(hardSkill) ? (
              <SListItem key={hardSkill.join(' / ')}>- {hardSkill.join(' / ')}</SListItem>
            ) : (
              <SListItem key={hardSkill}>- {hardSkill}</SListItem>
            ),
          )}
        </SList>
      )}
    </SPageWrapper>
  );
});

export { Trajectory };
