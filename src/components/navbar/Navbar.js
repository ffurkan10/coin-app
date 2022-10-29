import React from "react";
import Logo from "./Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img src={Logo} alt="" />
        <div className="navbar__container__btn">
          <button className="navbar__container__btn__login">Login</button>
          <button className="navbar__container__btn__sign">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
