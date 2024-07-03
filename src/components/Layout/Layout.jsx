import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-md mx-auto px-4">
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};