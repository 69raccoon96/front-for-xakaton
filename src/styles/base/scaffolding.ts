import { css } from 'styled-components/macro';

import { COLORS } from '../shared/constants';

export const scaffolding = css`
  html {
    box-sizing: border-box;
  }

  body {
    min-width: 400px;

    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${COLORS.BLACK};
    letter-spacing: 0.25px;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  *::-webkit-search-cancel-button {
    display: none;
  }
`;
