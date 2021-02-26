import React, { useEffect, useState } from 'react';

import { runInAction, toJS } from 'mobx';

import { SPageWrapper, SText, STitle } from '../styles';
import { Breadcrumb } from '../../shared/components/Breadcrumb';
import { IBreadcrumbItem } from '../../shared/components/Breadcrumb/models';
import { Paths } from '../../shared/defaults';
import { useAppStore } from '../../mobx';
import { SAccordionContentWrapper, SAccordions, SAccordionShortInfo, SAccordionText } from './styles';
import { Accordion } from '../../shared/components/Accordion';
import { ICourse } from '../../api/auth/models';

const Disciplines: React.FC = () => {
  const [disciplines, setDisciplines] = useState<ICourse[]>([]);
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
      const storedDisciplines = runInAction(() => toJS(store.disciplines));
      if (storedDisciplines) {
        setDisciplines([...storedDisciplines.soft, ...storedDisciplines.hard.flat()]);
      }
    })();
  }, [store]);

  return (
    <SPageWrapper>
      <Breadcrumb sequence={breadcrumbSequence} />
      <STitle>Мои дисциплины</STitle>
      <SText>Все дисциплины,изучаемые ранее или в этом семестре.</SText>
      <SAccordions>
        {disciplines.map(discipline => (
          <Accordion
            key={discipline.id}
            title={discipline.name}
            content={
              <SAccordionContentWrapper>
                <SAccordionShortInfo>
                  <SAccordionText>Ак. часы</SAccordionText>
                  <SAccordionText>Макс. кол-во обучающихся</SAccordionText>
                  <SAccordionText>Ответственный</SAccordionText>
                  <SAccordionText accented>{discipline.hours}</SAccordionText>
                  <SAccordionText accented>{discipline.count}</SAccordionText>
                  <SAccordionText accented>{discipline.teacher}</SAccordionText>
                </SAccordionShortInfo>
                <SAccordionText>{discipline.info}</SAccordionText>
              </SAccordionContentWrapper>
            }
          />
        ))}
      </SAccordions>
    </SPageWrapper>
  );
};

export { Disciplines };
