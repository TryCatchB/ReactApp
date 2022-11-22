import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import "./Styles/PostComment.css";
import "./Styles/Pagination.css";
import "./Styles/PostInfo.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/UI/NavBar/NavBar";
import { Auth, Query } from "./Hooks/useContext";
import AppRouter from "./Components/AppRouter";

function App() {
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLodaing] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
    }
    setIsLodaing(false);
  }, []);

  return (
    <Auth.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Query.Provider value={{ filter, setFilter }}>
          <NavBar />
          <AppRouter />
        </Query.Provider>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default App;
