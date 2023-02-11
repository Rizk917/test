import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeskHeader from './deskheader';
import DeskFooter from './deskfooter';
import iphone from '../images/iphone13.png'
import { Path } from 'react-router';
import Header from './Header';
import FooterPhone from './footer';
import Menu from './menu';
import Brands from './pop-brands';
import PhoneCards from './PhoneCards';



function PhonePage() {
  const [phones, setPhones] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);


  useEffect(() => {
    loadphones();
  }, []);

  const loadphones = async () => {
    const result = await axios.get("https://mobilixbackend.onrender.com/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setPhones(sortedphones);
  }


  return (
    <>
      <div className="main">
        <div className="desktop-view">
          <DeskHeader open={open} setOpen={setOpen} />
          <PhoneCards setOpen={setOpen} />
          <DeskFooter setOpen={setOpen} />
        </div>
        <div className="phone-view">
          <Menu className={show ? 'main-open' : 'menu-back'} setShow={setShow} />
          <Header setShow={setShow} />
          <Brands setShow={setShow} />
          <PhoneCards setShow={setShow} />
        </div>
        <FooterPhone setShow={setShow} />
      </div>
    </>
  );
}

export default PhonePage;


function close() {
  let change = document.querySelector(".main-menu");
  change.classList.toggle("main-close")
}