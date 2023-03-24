import React from "react";
import { Link } from "react-router-dom";
import "./loginpage.css";

const RegisterForm = ({ login }) => {
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
      <div className="login__input-field confirm-pass">
        <label>Confirm Password</label>
        <input type={"password"} />
      </div>
      <div className="login__button-container">
        <Link to="/home">
          <button type="submit" className="btn">
            Register
          </button>
        </Link>
        <p>
          Have a Account?{"  "}{" "}
          <a href="#" onClick={login}>
            Log In
          </a>
        </p>
        <p>
          Be on <a href="#">Guest Mode!</a>
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
