import { css } from '@emotion/react';
import { Logo } from '../assets';

const Header = () => {
  return (
    <header css={headerStyle}>
      <img src={Logo} alt="MUJUNG" css={logoStyle} />
    </header>
  );
};

export default Header;

export const headerStyle = css`
  width: 100%;
  height: 100px; /* top(40px) + logo height(39px) + bottom padding(21px) */
  position: relative;
`;

export const logoStyle = css`
  position: absolute;
  top: 40px;
  left: 20px;
  width: 196px;
  height: 39px;
`;
