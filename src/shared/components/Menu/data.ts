import { IMenuItem } from "./models";
import { Paths } from "../../defaults";
import map from "../../../media/images/decorative/map.svg";
import calendar from "../../../media/images/decorative/calendar.svg";
import arrows from "../../../media/images/decorative/arrows.svg";
import checkedMenu from "../../../media/images/decorative/checked-menu.svg";

const menuItems: IMenuItem[] = [
  {
    title: "Мои дисциплины",
    icon: calendar,
    url: Paths.Disciplines,
  },
  {
    title: "Основные траектории",
    icon: arrows,
    url: Paths.Trajectories,
  },
  {
    title: "Карта траекторий",
    icon: map,
    url: Paths.TrajectoryMap,
  },
  {
    title: "Составление траектории",
    icon: checkedMenu,
    url: Paths.CreateTrajectory,
  },
];

export { menuItems };
