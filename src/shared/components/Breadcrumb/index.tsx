import React from 'react';

import { IBreadcrumbProps } from './models';
import { SLink, SSpan, SWrapper } from './styles';

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ sequence }) => {
  return (
    <SWrapper>
      {sequence.map((item, index) => {
        const isLast = index === sequence.length - 1;
        return (
          <React.Fragment key={item.title}>
            <SLink to={item.url} $isLast={isLast}>
              {item.title}
            </SLink>
            {!isLast && <SSpan> / </SSpan>}
          </React.Fragment>
        );
      })}
    </SWrapper>
  );
};

export { Breadcrumb };
