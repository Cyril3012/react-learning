import Button from "@mui/material/Button";
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div>
        <div className="user">
          <h3>User Name</h3>
          <input id="input" type="text" placeholder="Cyril" />
        </div>

        <div className="pass">
          <h3>Password</h3>
          <input
            id="input"
            type="password"
            placeholder="Enter valid password"
          />
        </div>
        <div>
          <p className="forgot">Forgot Password?</p>
        </div>

        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Login;
