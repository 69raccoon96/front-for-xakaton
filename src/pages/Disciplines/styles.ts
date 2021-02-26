import styled from 'styled-components/macro';
import { COLORS } from '../../styles/shared/constants';

const SAccordions = styled.div`
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const SAccordionContentWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;

const SAccordionShortInfo = styled.div`
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1.5fr 4fr 4fr;
  grid-gap: 0 30px;
`;

const SAccordionText = styled.p<{ accented?: boolean }>`
  margin: 0;

  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: ${({ accented }) => (accented ? COLORS.DARK_PURPLE : COLORS.BLACK)};
`;

export { SAccordions, SAccordionContentWrapper, SAccordionShortInfo, SAccordionText };
