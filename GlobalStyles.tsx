/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        background-color: #000;
        color: #333;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul {
        list-style: none;
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
      }
    `}
  />
);

export default GlobalStyles;
