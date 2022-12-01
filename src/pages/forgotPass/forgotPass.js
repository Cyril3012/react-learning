import React, { useState } from "react";
import { GoLock } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import "./forgotPass.css";

const ForgotPass = () => {
  const [mail, setMail] = useState("");

  const handleChange = (e) => {
    setMail(e.target.value);
    console.log(e.target.value);
  };

  const onSend = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user.mail === mail) {
      console.log(user.pass);
      alert("The password is sent to your mail succesfully");
    } else {
      alert("Mail id not registered. Please provide your registered mail id.");
    }
  };

  return (
    <>
      <div className="passContainer">
        <div className="passBox">
          <div className="lockLogo">
            <GoLock />
          </div>
          <h2> Forgot password</h2>
          <p>Provide the registered mail id </p>
          <p>where you want to get your account password</p>
          <div>
            <label>Email</label>
            <input
              value={mail}
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder={<CiMail />}
            ></input>
          </div>

          <div className="mailPassword">
            <button onClick={() => onSend()}>Send Mail</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
