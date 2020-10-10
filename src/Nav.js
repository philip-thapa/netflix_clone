import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=24"
        alt="Netflix_logo"
      />

      <img
        className="nav__avatar"
        src="https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictogram-vector-11333831.jpg"
        alt="Avatar_logo"
      />
    </div>
  );
};

export default Nav;
