import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div css={containerStyle}>
      <div css={mobileFrameStyle}>
        <Header />
        <main css={mainStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

// Styles
const containerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const mobileFrameStyle = css`
  width: 375px;
  height: 812px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const mainStyle = css`
  flex: 1;
  overflow-y: auto;
`;
