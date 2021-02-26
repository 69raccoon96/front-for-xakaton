import React, { InputHTMLAttributes } from 'react';

import { SInput } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
  return <SInput {...props} />;
};

export { Input };
