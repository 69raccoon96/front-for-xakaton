import React, { useEffect, useState } from "react";

import { runInAction, toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { IBreadcrumbItem } from "../../shared/components/Breadcrumb/models";
import { Paths } from "../../shared/defaults";
import { SPageWrapper, SText, STitle } from "../styles";
import { Breadcrumb } from "../../shared/components/Breadcrumb";
import { useAppStore } from "../../mobx";
import {
  STrajectoriesWrapper,
  STrajectoryCard,
  STrajectoryCardDescription,
  STrajectoryName,
  STrajectoryPercent,
  STrajectoryProgress,
} from "./styles";
import arrow from "../../media/images/decorative/arrow.svg";
import { ITrajectory } from "../../api/auth/models";

const Trajectories: React.FC = observer(() => {
  const [trajectories, setTrajectories] = useState<ITrajectory[]>([]);
  const { store } = useAppStore();

  const breadcrumbSequence: IBreadcrumbItem[] = [
    {
      title: "Личный кабинет",
      url: Paths.Home,
    },
    {
      title: "Основные траектории",
      url: Paths.Disciplines,
    },
  ];

  useEffect(() => {
    (async function getTrajectories() {
      await store.setTrajectories();
      setTrajectories(runInAction(() => toJS(store.trajectories)));
    })();
  }, [store]);

  return (
    <SPageWrapper>
      <Breadcrumb sequence={breadcrumbSequence} />
      <STitle>Основные траектории ИРИТ-РТФ</STitle>
      <SText>
        Все траектории и рекомендации по выбору траектории.
        <br />
        *Процентном соотношение учитывает дисциплины, изученные ранее.
      </SText>
      <STrajectoriesWrapper>
        {trajectories.map((item) => (
          <STrajectoryCard
            to={`${Paths.Trajectories}/${item.id}`}
            key={item.id}
          >
            <STrajectoryCardDescription>
              <STrajectoryName>{item.name}</STrajectoryName>
              <STrajectoryPercent>{`${item.percent} % подходит вам*`}</STrajectoryPercent>
              <STrajectoryProgress percent={item.percent} />
            </STrajectoryCardDescription>
            <img src={arrow} alt="arrow" />
          </STrajectoryCard>
        ))}
      </STrajectoriesWrapper>
    </SPageWrapper>
  );
});

export { Trajectories };
