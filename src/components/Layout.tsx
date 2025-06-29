import { Outlet } from 'react-router-dom';
import MujungLogo from "../assets/mujungLogo.tsx";
const Layout = () => {
  return (
    <div>
      <header>
        <MujungLogo />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
