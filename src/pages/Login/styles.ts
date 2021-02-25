import styled from 'styled-components/macro';
import { COLORS } from '../../styles/shared/constants';

const SPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${COLORS.LIGHT_PURPLE};
`;

const SLegend = styled.legend`
  padding-bottom: 32px;

  align-self: center;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 20px;
  }
`;

const SLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  input {
    margin-top: 16px;
  }
`;

const SButton = styled.button`
  width: 390px;
  height: 50px;

  border: none;

  color: ${COLORS.WHITE};
  background-color: ${COLORS.DARK_PURPLE};
`;

export { SPageWrapper, SLegend, SForm, SLabel, SButton };
