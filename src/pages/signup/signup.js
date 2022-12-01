import React, { useState } from "react";
import "./signup.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  const handleChange = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "pass") {
      setPass(e.target.value);
    } else if (type === "mail") {
      setMail(e.target.value);
    }
  };

  const onSignup = () => {
    if (name && pass && mail) {
      const user = { name: name, pass: pass, mail: mail };
      localStorage.setItem("user", JSON.stringify(user));
      handleClick("/login");
    } else {
      alert("Required to fill all inputs");
    }
  };

  return (
    <div className="container">
      <div className="signupContainer">
        <h4 className="title">SIGN UP</h4>
        <p>User Name</p>
        <div className="email">
          <input
            value={name}
            onChange={(e) => handleChange(e, "name")}
            id="email"
            type="text"
            placeholder="Cyril"
            required
          />
        </div>
        <p>User Mail</p>
        <div className="email">
          <input
            value={mail}
            onChange={(e) => handleChange(e, "mail")}
            id="email"
            type="email"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <p>Password</p>
        <div className="password">
          <input
            value={pass}
            onChange={(e) => handleChange(e, "pass")}
            id="password"
            type="password"
            placeholder="*********"
            required
          />
        </div>

        <div className="signup">
          <button type="button" onClick={() => onSignup()} variant="contained">
            Sign Up
          </button>
        </div>
        <div>
          <p>-----------OR-----------</p>
        </div>

        <div></div>
        <div className="alter">
          <a
            id="lk"
            href="https://www.linkedin.com/in/cyrilchandru3012/"
            target="_blank"
            rel="noreferrer"
          >
            <FcGoogle />
          </a>
        </div>

        <div className="log">
          <p>
            Already a user<a href="/">Login?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
