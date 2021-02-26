import styled, { css } from 'styled-components/macro';
import { COLORS } from '../../../styles/shared/constants';

type TAccordionProps = {
  isOpen: boolean;
  isLast: boolean;
  isFirst: boolean;
};

const lastStyles = css`
  border-radius: 0 0 20px 20px;
`;

const firstStyles = css`
  border-top: 1px solid ${COLORS.GREY};
  border-radius: 20px 20px 0 0;
`;

const SAccordionWrapper = styled.div<TAccordionProps>`
  width: 100%;

  border: 1px solid ${COLORS.GREY};
  border-top: none;

  ${({ isLast }) => isLast && lastStyles};
  ${({ isFirst }) => isFirst && firstStyles};

  background-color: ${COLORS.WHITE};
`;

const openHeaderStyles = css`
  background: ${COLORS.DARK_PURPLE};
  color: ${COLORS.WHITE};

  img {
    transform: rotate(270deg);
  }
`;

const closedHeaderStyles = css`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};

  img {
    transform: rotate(90deg);
  }
`;

const firstHeaderStyles = css`
  border-radius: 20px 20px 0 0;
`;

const SAccordionHeader = styled.button<TAccordionProps>`
  margin: 0;
  padding: 39px 42px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;

  ${({ isOpen }) => (isOpen ? openHeaderStyles : closedHeaderStyles)};

  ${({ isLast, isOpen }) => isLast && !isOpen && lastStyles};
  ${({ isFirst }) => isFirst && firstHeaderStyles};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.LIGHT_GREY};
    color: #c4c4c4;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const SAccordionText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export { SAccordionWrapper, SAccordionHeader, SAccordionText };
