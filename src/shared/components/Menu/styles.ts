import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { COLORS } from '../../../styles/shared/constants';
import { resetList } from '../../../styles/shared/utils';

const SWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 495px;
  height: 100vh;
  padding-top: 80px;

  flex-shrink: 0;

  background-color: ${COLORS.WHITE};
`;

const SUserCard = styled.div`
  margin-left: 105px;
  margin-bottom: 45px;

  display: flex;
  flex-direction: column;
`;

const SAvatarWrapper = styled.div`
  margin-bottom: 26px;

  width: 150px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${COLORS.LIGHT_PURPLE};
`;

const SUserName = styled.p`
  margin: 0 0 15px;

  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
`;

const SUserGroup = styled.p`
  margin: 0;

  font-size: 18px;
`;

const SMenuList = styled.ul`
  ${resetList};

  margin: 0 0 121px;
`;

const SMenuListItem = styled.li<{ isActive: boolean }>`
  padding: 26px 0 26px 105px;

  border-radius: 20px 0 0 20px;

  background-color: ${({ isActive }) => (isActive ? COLORS.LIGHT_PURPLE : COLORS.WHITE)};
  color: ${({ isActive }) => (isActive ? COLORS.DARK_PURPLE : COLORS.BLACK)};

  img {
    margin-right: 16px;

    width: 20px;
    height: 20px;
  }
`;

const SLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  color: inherit;
  text-decoration: none;
`;

const SButton = styled.button`
  padding-left: 105px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  background-color: transparent;
  cursor: pointer;

  font-size: 18px;

  img {
    margin-right: 15px;
  }
`;

export { SWrapper, SUserCard, SAvatarWrapper, SUserName, SUserGroup, SLink, SMenuList, SMenuListItem, SButton };
