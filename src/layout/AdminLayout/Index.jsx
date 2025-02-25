import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminHeader from "../../components/Header/Index";
import AdminFooter from "../../components/Footer/Index";
import ProductSidebar from "../../components/Sidebars/ProductSidebar";
import { logData } from "../../services/logService";

/**
 * Description:- This our main layout. Here we wrap all of our private routes. These routes are accessible only after user login successfully
 * @returns {any}
 */

const AdminLayout = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;

  // logData("pathname", pathname);
  // logData("path", path);

  return (
    <>
      {token ? (
        <div
          // className={`${sidebar && "toggle-sidebar"}`}
          className={path === "script-generator" ? "" : "toggle-sidebar"}
        >
          <AdminHeader />
          {path === "script-generator" && (
            <>
              <ProductSidebar />
            </>
          )}
          <main id="main" className="main">
            <Outlet />
          </main>
          <AdminFooter />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AdminLayout;
