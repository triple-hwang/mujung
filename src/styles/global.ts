/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fontFaces = css`
  @font-face {
    font-family: 'Freesentation';
    src: url('/fonts/FreesentationVF.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }
`;

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Freesentation';
    src: url('/fonts/FreesentationVF.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: #ebefff;
    font-family: 'Freesentation', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
