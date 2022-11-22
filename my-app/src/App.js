import React, { useState } from "react";
import "./Styles/App.css";
import "./Styles/PostComment.css";
import "./Styles/Pagination.css";
import "./Styles/PostInfo.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/UI/NavBar/NavBar";
import { Query } from "./Hooks/useContext";
import AppRouter from "./Components/AppRouter";

function App() {
  const [filter, setFilter] = useState({ sort: "", query: "" });

  return (
    <BrowserRouter>
      <Query.Provider value={{ filter, setFilter }}>
        <NavBar />
        <AppRouter />
      </Query.Provider>
    </BrowserRouter>
  );
}

export default App;
