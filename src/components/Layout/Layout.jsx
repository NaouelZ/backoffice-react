import css from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const { pathname } = useLocation()


  return (
    <div className={css.container}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.dashboard}>
        <div className={css.header}>

          <div className={css.profile}>
            <img src="./avatar.png" alt="person image" />
            <div className={css.details}>
              <p>Hello, <span>John Doe</span> !</p>
              <span>Account manager</span>
            </div>
          </div>
          <img src="./logout.svg" alt="" className="src" />
        </div>
        <div className={css.headerLine}></div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;