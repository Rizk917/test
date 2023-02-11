import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "../images/logo_transparent.png";
function Cards(props) {
  //get phones
  const [firstPhone, setFirstPhone] = useState({});
  const [secondPhone, setSecondPhone] = useState({});

  useEffect(() => {
    loadPhones();
  }, []);

  const loadPhones = async () => {
    const result = await axios.get("https://mobilixbackend.onrender.com/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setFirstPhone(sortedphones[0]);
    setSecondPhone(sortedphones[1]);
  };

  return (
    <div className="scroll-container" onClick={() => props.setShow(false)}>
      <div className=" card-1 cards">
        <img src={`https://mobilixbackend.onrender.com/${firstPhone.image}`} className="logo" alt="logo"></img>
        <div>
          <h5> {firstPhone.phoneModel + ":"}</h5>
          <p className="p">
            <br /> {"Device body: " + firstPhone.body}
            <br /> {"Device vendor: " + firstPhone.vendor}
            <br /> {"Device camera: " + firstPhone.camera}
            <br /> {"Device memory: " + firstPhone.memory}
            <br /> {"Device display: " + firstPhone.display}
          </p>
        </div>
      </div>
      <div className=" card-1 cards">
        <img src={`https://mobilixbackend.onrender.com/${secondPhone.image}`} className="logo" alt="logo"></img>
        <div>
          <h5> {secondPhone.phoneModel + ":"}</h5>
          <p className="p">
            <br /> {"Device body: " + secondPhone.body}
            <br /> {"Device vendor: " + secondPhone.vendor}
            <br /> {"Device camera: " + secondPhone.camera}
            <br /> {"Device memory: " + secondPhone.memory}
            <br /> {"Device display: " + secondPhone.display}
          </p>
        </div>
      </div>
    </div>

  );
}
export default Cards;
