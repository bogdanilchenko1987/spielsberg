import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import ScrollToTop from "../common/ScrollToTop";
import Header from "../Header";

const Layout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
