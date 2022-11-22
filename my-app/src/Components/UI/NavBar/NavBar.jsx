import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Query } from "../../../Hooks/useContext";
import MyButton from "../Button/MyButton";
import Input from "./Input/Input";
import "./NavBar.css";

const NavBar = () => {
  const { filter, setFilter } = useContext(Query);

  return (
    <nav className="NavBar">
      <div>
        <MyButton>Exit</MyButton>
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <Link className="link" to="/About">
              About WebSite
            </Link>
          </li>
          <li>
            <Link className="link" to="/Posts">
              Posts
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Input
          value={filter.query}
          onChange={(event) =>
            setFilter({ ...filter, query: event.target.value })
          }
          placeholder="Search..."
        />
      </div>
    </nav>
  );
};

export default NavBar;
