import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./loginpage.css";
import RegisterForm from "./RegisterForm";
const LoginPage = () => {
  const [register, setRegister] = useState(false);
  const LoginForm = () => {
    return (
      <>
        <div className="login__input-field">
          <label>Username</label>
          <input type={"text"} />
        </div>
        <div className="login__input-field">
          <label>Password</label>
          <input type={"password"} />
        </div>
        <div className="login__button-container">
          <Link to="/home">
            <button type="submit" className="btn">
              Login
            </button>
          </Link>
          <p>
            Dont have a Account?{"  "}{" "}
            <a href="#" onClick={() => setRegister(!register)}>
              Sign Up
            </a>
          </p>
          <p>
            Be on{" "}
            <Link to={"/home"}>
              <a href="#">Guest Mode!</a>
            </Link>
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="container login__container">
      <div className="login__card">
        <h2>To Do List</h2>
        {register === false ? (
          <LoginForm />
        ) : (
          <RegisterForm login={() => setRegister(!register)} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
