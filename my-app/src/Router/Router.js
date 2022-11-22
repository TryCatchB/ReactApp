import About from "../Pages/About";
import InformationAboutPost from "../Pages/InformationAboutPost";
import Posts from "../Pages/Posts";

export const router = [
  { path: "/Posts", element: <Posts /> },
  { path: "/About", element: <About /> },
  { path: "/Posts/:id", element: <InformationAboutPost /> },
];
