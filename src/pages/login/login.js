import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = (link) => {
    navigate(`/${link}`);
  };
  const handleChange = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "pass") {
      setPass(e.target.value);
    }
  };

  const onSubmit = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);

    if (name === user.name && pass === user.pass) {
      alert("Logged in succesfully");
      handleClick("dashboard");
    } else {
      alert("Invalid Username or Password ");
      setName("");
      setPass("");
    }
  };

  return (
    <div className="login_container">
      <div>
        <div className="box">
          <h1 id="title2">Log in</h1>
          <lable>User Name</lable>
          <div className="user">
            <input
              value={name}
              onChange={(e) => handleChange(e, "name")}
              id="input"
              type="text"
              placeholder="Cyril"
              required
            />
          </div>
          <lable>Password</lable>
          <div className="pass">
            <input
              value={pass}
              onChange={(e) => handleChange(e, "pass")}
              id="pass"
              type="password"
              placeholder="Enter valid password"
              required
            />
          </div>
          <div className="forgot">
            <a href="/forgotPassword">Forgot Password?</a>
          </div>
          <div id="button">
            {
              <button
                onClick={() => handleClick("signup")}
                color="primary"
                className="px-4"
              >
                Sign Up
              </button>
            }

            <button onClick={() => onSubmit()} variant="contained">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
