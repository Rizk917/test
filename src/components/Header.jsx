import React from "react";
import logo from '../images/logo_transparent.png';
import search from '../images/search.png';
import bmenue from '../images/bmenu.png';

function Header(props) {
  return <div className="header">
    <header className="App-header">
      <a href="#" onClick={() => props.setShow(true)}>
        <img src={bmenue} className="burger-menu" alt="menu"></img>
      </a>
      <img src={logo} className="logo" alt="logo"></img>
      <a href="#">
        <img src={search} className="search-icon" alt="search" onClick={() => props.setShow(false)}></img>
      </a>
    </header>
  </div>
}

export default Header;