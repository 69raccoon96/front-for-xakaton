import React from "react";

import { Switch, Route, useHistory, Redirect } from "react-router-dom";

import { Paths } from "./shared/defaults";
import { Disciplines } from "./pages/Disciplines";
import { Login } from "./pages/Login";
import { Trajectories } from "./pages/Trajectories";
import { CreateTrajectory } from "./pages/CreateTrajectory";
import { Trajectory } from "./pages/Trajectories/Trajectory";
import { TrajectoryMap } from "./pages/TrajectoryMap";

const Routes = () => {
  const history = useHistory();

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  if (!isAuthenticated) {
    history.push(Paths.Login);
  }

  return (
    <Switch>
      <Route exact path={Paths.Home}>
        <Redirect to={Paths.Disciplines} />
      </Route>

      <Route exact path={Paths.Disciplines} component={Disciplines} />
      <Route exact path={Paths.Trajectories} component={Trajectories} />
      <Route exact path={`${Paths.Trajectories}/:id`} component={Trajectory} />

      <Route exact path={Paths.TrajectoryMap} component={TrajectoryMap} />
      <Route exact path={Paths.CreateTrajectory} component={CreateTrajectory} />

      <Route exact path={Paths.Login} component={Login} />
    </Switch>
  );
};

export { Routes };
