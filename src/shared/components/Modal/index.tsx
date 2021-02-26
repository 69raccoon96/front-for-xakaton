import React from 'react';

import { IModalProps } from './models';
import { SBlackout, SModalWrapper, SModal, SCrossButton } from './styles';
import cross from '../../../media/images/decorative/cross.svg';

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <>
      <SBlackout />
      <SModalWrapper>
        <SModal>
          <SCrossButton onClick={onClose}>
            <img src={cross} alt='cross' />
          </SCrossButton>
          {children}
        </SModal>
      </SModalWrapper>
    </>
  ) : null;
};

export { Modal };
