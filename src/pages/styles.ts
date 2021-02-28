import styled from "styled-components/macro";

import { COLORS } from "../styles/shared/constants";

const SPageWrapper = styled.div`
  padding: 45px 105px 45px 525px;

  width: 100%;
  min-height: 100vh;

  background-color: ${COLORS.LIGHT_PURPLE};
`;

const STitle = styled.h1`
  margin: 0 0 20px;

  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  color: ${COLORS.BLACK};
`;

const SText = styled.p`
  margin: 0 0 48px;

  max-width: 690px;

  font-size: 16px;
  line-height: 20px;

  a {
    color: ${COLORS.BLACK};
  }
`;

export { SPageWrapper, STitle, SText };
