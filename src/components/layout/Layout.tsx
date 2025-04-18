import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 px-2 sm:px-4 py-3 md:py-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="bg-bg-secondary border border-border rounded-md shadow-sm">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
