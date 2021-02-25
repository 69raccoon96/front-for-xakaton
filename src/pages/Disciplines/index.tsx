import React, { useEffect } from 'react';

import { runInAction, toJS } from 'mobx';

import { SPageWrapper, SText, STitle } from '../styles';
import { Breadcrumb } from '../../shared/components/Breadcrumb';
import { IBreadcrumbItem } from '../../shared/components/Breadcrumb/models';
import { Paths } from '../../shared/defaults';
import { useAppStore } from '../../mobx';

const Disciplines: React.FC = () => {
  const { store } = useAppStore();

  const breadcrumbSequence: IBreadcrumbItem[] = [
    {
      title: 'Личный кабинет',
      url: Paths.Home,
    },
    {
      title: 'Мои дисциплины',
      url: Paths.Disciplines,
    },
  ];

  useEffect(() => {
    (async function getDisciplines() {
      await store.setDisciplines();
    })();
  }, [store]);

  const disciplines = runInAction(() => toJS(store.disciplines));
  console.log(disciplines);

  return (
    <SPageWrapper>
      <Breadcrumb sequence={breadcrumbSequence} />
      <STitle>Мои дисциплины</STitle>
      <SText>Все дисциплины,изучаемые ранее или в этом семестре.</SText>
    </SPageWrapper>
  );
};

export { Disciplines };
