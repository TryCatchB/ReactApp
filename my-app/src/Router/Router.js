import { Navigate } from "react-router-dom";
import About from "../Pages/About";
import InformationAboutPost from "../Pages/InformationAboutPost";
import Login from "../Pages/Login";
import Posts from "../Pages/Posts";

export const priviteRoutes = [
  { path: "/Posts", element: <Posts /> },
  { path: "/About", element: <About /> },
  { path: "/Posts/:id", element: <InformationAboutPost /> },
  { path: "/*", element: <Navigate to="/Posts" replace /> },
];

export const publicRoutes = [
  { path: "/Login", element: <Login /> },
  { path: "/*", element: <Navigate to="/Login" replace /> },
];
