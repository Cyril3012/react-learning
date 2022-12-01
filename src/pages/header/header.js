import React from "react";
import "./header.css";

let user = localStorage.getItem("user");
user = JSON.parse(user);

const Header = () => {
  return (
    <>
      <div className="headerDash">
        <header>This is a Dashboard</header>
        <p id="userLogged">{user.name}</p>
      </div>
    </>
  );
};
export default Header;
