import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [auth, setAuth] = useState({
    userName: "",
    password: ""
  });
  const authData = {
    userName: "chan",
    password: "123123"
  };
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="form">
        <h2 className="login-header">Health Care</h2>
        <form
          className="login-form"
          onChange={(event) => {
            setAuth({
              ...auth,
              [event.target.name]: event.target.value
            });
          }}
        >
          <input type="text" placeholder="User name" name="userName" />
          <input type="password" placeholder="Password" name="password" />
          <button
            onClick={(event) => {
              event.preventDefault();
              if (
                auth.userName === authData.userName &&
                auth.password === authData.password
              ) {
                navigate("/home");
              } else {
                alert("Invalid username or password");
              }
            }}
          >
            login
          </button>
          <p className="message">
            Not registered? <span>Create an account</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
