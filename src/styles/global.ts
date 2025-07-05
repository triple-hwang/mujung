/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FreesentationFont } from '../assets';

const fontFaces = css`
  @font-face {
    font-family: 'Freesentation';
    src: url(${FreesentationFont}) format('truetype');
    font-weight: 100 900;
    font-display: swap;
  }
`;

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Freesentation', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input,
  textarea {
    outline: none;
    border: none;
    font-family: inherit;
  }

  @media (max-width: 375px) {
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
    }

    button {
      -webkit-tap-highlight-color: transparent;
    }

    input,
    textarea {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }
`;

export default css`
  ${fontFaces}
  ${globalStyles}
`;
