import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../styles/shared/constants';

const SWrapper = styled.div`
  margin-bottom: 64px;
`;

const SLink = styled(Link)<{ $isLast: boolean }>`
  color: ${({ $isLast }) => ($isLast ? COLORS.BLACK : COLORS.BLACK_50)};

  text-decoration: none;
`;

const SSpan = styled.span`
  margin: 0;

  color: ${COLORS.BLACK_50};
`;

export { SWrapper, SLink, SSpan };
