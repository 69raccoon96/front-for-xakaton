import React, { useState } from 'react';

import { IAccordionProps } from './models';
import { SAccordionHeader, SAccordionText, SAccordionWrapper } from './styles';
import arrow from '../../../media/images/decorative/arrow.svg';

const Accordion: React.FC<IAccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const headerClick = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <SAccordionWrapper>
      <SAccordionHeader isOpen={isOpen} onClick={headerClick}>
        <SAccordionText>{title}</SAccordionText>
        <img src={arrow} alt='arrow' />
      </SAccordionHeader>
      {isOpen && content}
    </SAccordionWrapper>
  );
};

export { Accordion };
