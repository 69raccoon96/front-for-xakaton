import styled from 'styled-components/macro';
import { resetList } from '../../../styles/shared/utils';

const SH2Title = styled.h2`
  margin: 0 0 30px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const SH3Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 250%;
`;

const SList = styled.ul`
  ${resetList};

  margin: 0 0 20px;
`;

const SListItem = styled.li`
  font-size: 16px;
  line-height: 250%;
`;

export { SH2Title, SH3Title, SList, SListItem };
