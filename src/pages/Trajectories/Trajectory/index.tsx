import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { SPageWrapper } from '../../styles';
import { ITrajectoryMatchParams } from './models';
import { useAppStore } from '../../../mobx';

const Trajectory: React.FC<RouteComponentProps<ITrajectoryMatchParams>> = ({ match }) => {
  const { store } = useAppStore();

  useEffect(() => {
    (async function getTrajectoryInfo() {
      await store.setTrajectoryInfo(match.params.id);
    })();
  }, [store, match]);

  return <SPageWrapper>{match.params.id}</SPageWrapper>;
};

export { Trajectory };
