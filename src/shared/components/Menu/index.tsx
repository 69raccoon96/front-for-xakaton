import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import {
  SWrapper,
  SAvatarWrapper,
  SUserName,
  SUserCard,
  SUserGroup,
  SMenuList,
  SMenuListItem,
  SLink,
  SButton,
} from './styles';
import avatar from '../../../media/images/decorative/avatar.svg';
import { menuItems } from './data';
import exit from '../../../media/images/decorative/exit.svg';
import { Paths } from '../../defaults';

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const onLogout = () => {
    localStorage.removeItem('isAuthenticated');
    history.push(Paths.Login);
  };

  return isAuthenticated ? (
    <SWrapper>
      <SUserCard>
        <SAvatarWrapper>
          <img src={avatar} alt='avatar' />
        </SAvatarWrapper>
        <SUserName>Фамилия Имя Отчество</SUserName>
        <SUserGroup>РИ-290002</SUserGroup>
      </SUserCard>
      <SMenuList>
        {menuItems.map(menuItem => (
          <SMenuListItem key={menuItem.title} isActive={pathname === menuItem.url}>
            <SLink to={menuItem.url}>
              <img src={menuItem.icon} alt={menuItem.title} />
              {menuItem.title}
            </SLink>
          </SMenuListItem>
        ))}
      </SMenuList>

      <SButton onClick={onLogout}>
        <img src={exit} alt='logout' />
        Выйти
      </SButton>
    </SWrapper>
  ) : null;
};

export { Menu };
