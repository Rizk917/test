import React from "react";
import logo_F from "../images/logo_transparent.png";

function DeskFooter(props) {

    return <footer className="desk-foot" onClick={() => props.setOpen(true)}>
        <div className="deskwrap">
            <img src={logo_F} alt="logo" />
            <div className="ELN">
                <a href="#" className="left email">info@mobilix.com</a>
                <a href="#" className="left location">Location</a>
                <a href="#" className="left number">Phone-number</a>
            </div>
        </div>
    </footer>
}

export default DeskFooter;