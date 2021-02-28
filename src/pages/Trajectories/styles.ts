import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { COLORS } from "../../styles/shared/constants";

const STrajectoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

const STrajectoryCard = styled(Link)`
  padding: 33px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background-color: ${COLORS.WHITE};
  text-decoration: none;

  img {
    width: 26px;
    height: 26px;

    margin-left: 16px;
  }
`;

const STrajectoryCardDescription = styled.div``;

const STrajectoryName = styled.p`
  margin: 0 0 5px;

  font-size: 18px;
  line-height: 22px;

  color: ${COLORS.BLACK};
`;

const STrajectoryPercent = styled.span`
  font-size: 14px;
  line-height: 17px;

  color: ${COLORS.DARK_PURPLE};
`;

const STrajectoryProgress = styled.div<{ percent: number }>`
  margin-top: 8px;
  position: relative;

  width: 220px;
  height: 8px;

  border: 1px solid ${COLORS.LIGHT_GREY};

  &:after {
    content: "";

    position: absolute;
    top: -1px;
    left: -1px;

    width: calc(220px * ${({ percent }) => percent} / 100);
    height: 8px;

    background-color: ${({ percent }) =>
      percent < 30
        ? COLORS.LIGHT_RED
        : percent > 60
        ? COLORS.LIGHT_GREEN
        : COLORS.LIGHT_BLUE};
  }
`;

export {
  STrajectoriesWrapper,
  STrajectoryCard,
  STrajectoryCardDescription,
  STrajectoryName,
  STrajectoryPercent,
  STrajectoryProgress,
};
