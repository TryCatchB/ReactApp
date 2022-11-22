import React from "react";
import { Route, Routes } from "react-router-dom";
import { router } from "../Router/Router";

const AppRouter = () => {
  return (
    <Routes>
      {router.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
