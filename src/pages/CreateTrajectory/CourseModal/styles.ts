import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { COLORS } from '../../../styles/shared/constants';

const SContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const STitle = styled.h4`
  margin: 0 0 35px;

  align-self: center;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

const SCourseName = styled.p`
  margin: 0 0 28px;
  padding: 21px 30px 25px;

  border: 1px solid ${COLORS.BLACK};
  border-radius: 4px;

  font-size: 14px;
  line-height: 17px;
`;

const SCourseInfo = styled.p`
  margin: 0 0 7px;

  font-size: 14px;
  line-height: 17px;
`;

const SLink = styled(Link)`
  margin: 0 0 28px;

  color: #5555cd;
`;

export { SContentWrapper, STitle, SCourseName, SCourseInfo, SLink };
