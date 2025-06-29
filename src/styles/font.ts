/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fontGenerator = (
    weight: number,
    size: number,
    lineHeight: number,
    letterSpacing: number
) => css`
  font-family: 'Freesentation', sans-serif;
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}rem;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
    H1: fontGenerator(700, 1.25, 1.438, 0),
    H2: fontGenerator(400, 1, 1.188, 0),
    H3: fontGenerator(400, 0.875, 1, 0),

    warn: fontGenerator(400, 0.75, 0.875, 0),

    btn: fontGenerator(500, 1, 1.188, 0),
};

export default font;