import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';

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
import { useAppStore } from '../../../mobx';

const Menu: React.FC = observer(() => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { store } = useAppStore();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const onLogout = async () => {
    await store.logout();
    localStorage.removeItem('isAuthenticated');
    history.push(Paths.Login);
  };

  const userInfo = runInAction(() => store.userInfo);

  return isAuthenticated ? (
    <SWrapper>
      <SUserCard>
        <SAvatarWrapper>
          <img src={avatar} alt='avatar' />
        </SAvatarWrapper>
        <SUserName>{`${userInfo?.surname} ${userInfo?.name}`}</SUserName>
        <SUserGroup>{`РИ-${userInfo?.group}`}</SUserGroup>
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
});

export { Menu };
