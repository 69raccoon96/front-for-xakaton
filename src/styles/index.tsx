import { createGlobalStyle } from 'styled-components/macro';

import { normalize } from './base/normalize';
import { scaffolding } from './base/scaffolding';

export const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${scaffolding};
`;
