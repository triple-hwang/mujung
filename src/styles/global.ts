/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import color from './color';

const global = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    font-family: 'Freesentation', sans-serif;
    background-color: ${color.white};
    color: ${color.black};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  body {
    width: 100%;
    max-width: 80%;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    font-family: 'Freesentation', sans-serif;
    background-color: ${color.white};
    color: ${color.black};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: 'Freesentation', sans-serif;
    border: none;
    cursor: pointer;
    background: none;
  }

  ul,
  ol {
    list-style: none;
  }
`;

const fontFaces = css`
  @font-face {
    font-family: 'Freesentation';
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-4Regular.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'Freesentation';
    font-weight: 500;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-5Medium.woff2')
      format('woff2');
  }

  @font-face {
    font-family: 'Freesentation';
    font-weight: 700;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-7Bold.woff2')
      format('woff2');
  }
`;

export default css`
  ${fontFaces}
  ${global}
`;
