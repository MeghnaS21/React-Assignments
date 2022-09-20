import React from "react";
import { NavLink } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo">Movie App</div>
      </NavLink>
      <div className="user-image">
        <a href="/login"><img src={user} alt="user" /></a>
      </div>
      <NavLink to="/signup">
        <div className="signUp-style">Signup Page</div>
      </NavLink>
      
    </div>
  );
};

export default Header;
