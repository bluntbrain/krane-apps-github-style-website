import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white">
      <Header />
      <main className="flex-1 flex flex-col w-full mt-20 sm:mt-24 mb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
