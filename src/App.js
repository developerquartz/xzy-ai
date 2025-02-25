import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import { useSelector } from "react-redux";
import "./Assets/css/style.css";
import "./Assets/css/hover.css";
import "./Assets/css/Main.css";
import runAxiosSetup from "./helpers/run-axios-setup";
import AuthLayout from "./layout/AuthLayout/Index";
import Login from "./pages/AuthPage/Login/Index";
import ResetPassword from "./pages/AuthPage/resetPassword";
import { privateRoutes, publicRoutes } from "./routes";
import MainLayout from "./layout/MainLayout/Index";
import AdminLayout from "./layout/AdminLayout/Index";
import SetNewUserPassword from "./pages/AuthPage/setPassword";
import Test from "./Test";
import EmailEditorTemplates from "./EmailEditor";

/**
 * Description This is our main component wrapper, where we wrap and map all of our routes
 * @returns {any}
 */

function App() {
  const { loggedinUser } = useSelector((state) => state.auth);
  const token = loggedinUser?.data?.token;
  const adminId = loggedinUser?.data?.id;

  useLayoutEffect(() => {
    runAxiosSetup({ token, adminId });
  }, [token, adminId]);

  useEffect(() => {
    AOS.init();
  }, []);

  const DocComponent = () => {
    const html = document.getElementById("docs");
    return <h1>Manish Mittal</h1>;
  };

  return (
    <>
      <Routes>
        {/* <Route path="EmailEditor" element={<EmailEditorTemplates />} />
        <Route path="test" element={<Test />} /> */}

        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/home" />} />
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to="/login" />} />
          <Route path="/set-new-password" element={<SetNewUserPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          {privateRoutes.map((route) => {
            if (
              (loggedinUser.data &&
                route.permission?.includes(loggedinUser.data?.role)) ||
              !loggedinUser.data
            )
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
          })}
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
