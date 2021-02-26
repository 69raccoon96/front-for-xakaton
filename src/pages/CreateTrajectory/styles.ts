import styled from 'styled-components/macro';

import { resetList } from '../../styles/shared/utils';
import { COLORS } from '../../styles/shared/constants';

const SList = styled.ul<{ isGood?: boolean; isLast?: boolean }>`
  ${resetList};

  width: 100%;

  li {
    background-color: ${({ isGood }) => (isGood ? COLORS.LIGHT_GREEN : COLORS.LIGHT_BLUE)};

    &:last-of-type {
      ${({ isLast }) => isLast && 'border-radius: 0 0 20px 20px'};
    }
  }
`;

const SListItem = styled.li`
  width: 100%;
  padding: 39px 42px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid ${COLORS.GREY};
`;

const SButton = styled.button`
  border: none;
  padding: 10px;

  cursor: pointer;

  background-color: transparent;

  img {
    width: 18px;
    height: 18px;
  }
`;

export { SList, SListItem, SButton };
