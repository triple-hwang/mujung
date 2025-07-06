import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { colors, layout } from '../styles/tokens';

const Layout = () => {
  return (
    <div css={containerStyle}>
      <div css={mobileFrameStyle}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

const containerStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const mobileFrameStyle = css`
  width: ${layout.container.mobile.width};
  height: ${layout.container.mobile.height};
  background-color: ${colors.background.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  position: relative;
`;
