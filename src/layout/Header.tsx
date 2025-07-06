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

const headerStyle = css`
  width: 100%;
  height: 100px;
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
    justify-content: flex-start;
    padding: 8px 20px 20px 20px;
`;

const logoStyle = css`
  width: 196px;
  height: 39px;
`;
