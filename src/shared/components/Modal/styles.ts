import styled from 'styled-components/macro';
import { COLORS } from '../../../styles/shared/constants';

const SBlackout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;

  background: rgba(50, 55, 58, 0.2);
`;

const SModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw - 495px);
  height: 100vh;
  z-index: 3;

  margin-left: 495px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SModal = styled.div`
  position: relative;
  padding: 22px 40px 40px;

  min-width: 414px;

  border-radius: 10px;

  background-color: ${COLORS.WHITE};
`;

const SCrossButton = styled.button`
  position: absolute;
  padding: 10px;
  right: 10px;
  top: 10px;

  border: none;

  cursor: pointer;

  background-color: ${COLORS.WHITE};
`;

export { SBlackout, SModalWrapper, SModal, SCrossButton };
