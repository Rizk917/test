import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './adminNav.css'
import AdminContactUs from "./contactUsadmin";
import { useNavigate } from 'react-router-dom';

function AdminNav() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);
    const logOut = () => {
        window.location.href = "/";

        window.localStorage.clear();
        localStorage.removeItem('token');
      };
    return (
        <div className="adnav">
            <ul className="ul-adminNav">
                <h1 className="h1mhmd">Dashborad</h1>
                <div className="li-wrapperr">
                    <li className="nav-item"><a href="/AdminContactUs">contact us</a></li>
                    <li className="nav-item"><a href="/Adminarticle">article</a></li>
                    <li className="nav-item"><a href="/AdminPhonedata">phones</a></li>
                    <li className="nav-item"><a href="/" onClick={logOut}>Logout</a></li>
                </div>
            </ul>
        </div>

    )



}

export default AdminNav