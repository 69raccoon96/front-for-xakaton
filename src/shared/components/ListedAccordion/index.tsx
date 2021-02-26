import React, { useState } from 'react';

import { IAccordionProps } from './models';
import { SAccordionHeader, SAccordionText, SAccordionWrapper } from './styles';
import arrow from '../../../media/images/decorative/arrow.svg';
import whiteArrow from '../../../media/images/decorative/white-arrow.svg';

const ListedAccordion: React.FC<IAccordionProps> = ({ title, content, isFirst, isLast, disabled }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const headerClick = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <SAccordionWrapper isOpen={isOpen} isFirst={isFirst} isLast={isLast}>
      <SAccordionHeader disabled={disabled} isOpen={isOpen} onClick={headerClick} isFirst={isFirst} isLast={isLast}>
        <SAccordionText>{title}</SAccordionText>
        {!disabled && <img src={isOpen ? whiteArrow : arrow} alt='arrow' />}
      </SAccordionHeader>
      {isOpen && content}
    </SAccordionWrapper>
  );
};

export { ListedAccordion };
