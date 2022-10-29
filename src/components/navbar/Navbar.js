import React from "react";
import Logo from "./Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="navbar__container__btn">
          <button className="navbar__container__btn__login">Login</button>
          <button className="navbar__container__btn__sign">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
