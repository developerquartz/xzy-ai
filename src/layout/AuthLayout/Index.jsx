import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Auth.scss";
import Footer from "../../components/Footer/Index";

/**
 * Description:- This is our auth layout. Here we wrap all of our routes related to authentication
 * @returns {any}
 */

const AuthLayout = () => {
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;

  return (
    <>
      {token ? (
        <Navigate to="/dashboard" />
      ) : (
        <>
          <main className="position-relative">
            <div className="gradient"></div>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AuthLayout;
