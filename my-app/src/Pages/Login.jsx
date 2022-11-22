import React, { useContext } from "react";
import MyButton from "../Components/UI/Button/MyButton";
import MyInput from "../Components/UI/Input/MyInput";
import { Auth } from "../Hooks/useContext";

const Login = () => {
  const { setIsAuth } = useContext(Auth);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput placeholder="Login" />
        <MyInput placeholder="PassWord" />
        <MyButton>Entrance</MyButton>
      </form>
    </div>
  );
};

export default Login;
