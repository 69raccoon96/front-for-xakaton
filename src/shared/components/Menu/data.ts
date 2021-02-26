import { IMenuItem } from './models';
import calendar from '../../../media/images/decorative/calendar.svg';
import arrows from '../../../media/images/decorative/arrows.svg';
import checkedMenu from '../../../media/images/decorative/checked-menu.svg';
import { Paths } from '../../defaults';

const menuItems: IMenuItem[] = [
  {
    title: 'Мои дисциплины',
    icon: calendar,
    url: Paths.Disciplines,
  },
  {
    title: 'Основные траектории',
    icon: arrows,
    url: Paths.Trajectories,
  },
  {
    title: 'Составление траектории',
    icon: checkedMenu,
    url: Paths.CreateTrajectory,
  },
];

export { menuItems };
