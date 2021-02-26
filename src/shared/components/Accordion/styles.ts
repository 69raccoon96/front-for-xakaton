import styled from 'styled-components/macro';

import { COLORS } from '../../../styles/shared/constants';

const SAccordionWrapper = styled.div`
  padding: 39px 42px;
  width: 100%;

  border: none;
  border-radius: 20px;

  background-color: ${COLORS.WHITE};
`;

const SAccordionHeader = styled.button<{ isOpen: boolean }>`
  margin: 0;
  padding: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;

  background-color: ${COLORS.WHITE};
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;

    transform: ${({ isOpen }) => (isOpen ? 'rotate(270deg)' : 'rotate(90deg)')};
  }
`;

const SAccordionText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export { SAccordionWrapper, SAccordionHeader, SAccordionText };
