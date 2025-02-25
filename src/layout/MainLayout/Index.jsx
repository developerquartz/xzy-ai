import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

/**
 * Description:- This is our main layout. Here we wrap all of our public routes
 * @returns {any}
 */

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
