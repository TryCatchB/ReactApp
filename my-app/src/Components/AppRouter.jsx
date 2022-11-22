import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth } from "../Hooks/useContext";
import { priviteRoutes, publicRoutes } from "../Router/Router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(Auth);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {priviteRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
