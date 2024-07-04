import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4">
      <AppBar />

      <Outlet />
    </div>
  );
};
export default Layout;
