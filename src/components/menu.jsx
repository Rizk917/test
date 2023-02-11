import React from "react";

function Menu(props) {
    return <div className={`main-menu ${props.className}`}>
        <div className="light-pink">
            <h1 className="mobilix">MOBILIX</h1>
            <a href="/" className="home btn">Home</a>
            <a href="aboutus" className="about btn">About us</a>
            <a href="contactus" className="contact btn">Contact us</a>
        </div>
        <div className="dark-pink">
            <div className="drk-pnk-div">
                <a href="login" className="log-in btn-secondary">Log in</a>
                <a href="/" className="log-out btn-secondary">Log out</a>
            </div>
        </div>
    </div>
}

// function open() {
//     let change = document.querySelector(".main-menu");
//         change.classList.toggle("main-open")
//   }
export default Menu;