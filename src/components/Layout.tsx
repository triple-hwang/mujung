import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <h1>MUJUNG</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
# 씨 씨 씨
export default Layout;
