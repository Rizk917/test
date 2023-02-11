import React, { useState, lazy } from "react";
import logo from "../images/logo_transparent.png";
import bmenue from "../images/bmenu.png";



function DeskHeader({ open, setOpen }) {
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  return (
    <header className="deskheader" open={open} setOpen={setOpen}>
      <img
        src={logo}
        alt="logo"
        className="desk-header-logo"
        onClick={() => setOpen(true)}
      />
      <div className="sidebar-child" onClick={() => setOpen(true)}>
        <a href="/" className="side-element">
          Home
        </a>
        <a href="/Phones" className="side-element">
          Phones
        </a>
        <a href="/news" className="side-element">
          News
        </a>
        <a href="/aboutus" className="side-element">
          About us
        </a>
        <a href="/contactus" className="hidden">
          Contact us
        </a>
      </div>
      <div className="grow">
        <div className={open ? 'align-b' : 'align-b-down'}>
          <a href="#" className="drop" onClick={handleOpen}>
            New here?
          </a>
          {/* className={`align-b ${props.className}`} */}
          <div className="navbar">
            <a href="#" onClick={drop}>Log-in</a>
            <a href="/" onClick={logOut} className="hidden">
              Log-out 
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function drop() {
  let change = document.querySelector(".pop-up-login");
  change.classList.toggle("pop-up-login-show");
}
export default DeskHeader;