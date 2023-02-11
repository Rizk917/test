import '../App.css';
import Header from '../components/Header';
import Brands from '../components/pop-brands';
import FooterPhone from '../components/footer';
import Menu from '../components/menu';
import DeskHeader from '../components/deskheader';
import DeskFooter from '../components/deskfooter';
import { useState } from 'react';
import News from './News';
import NewsCards from '../components/NewsCards';


function NewsP() {
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(true);

    return (
        <div className="main">
            <div className="desktop-view">
                <DeskHeader open={open} setOpen={setOpen} />
                <News setOpen={setOpen} />
                <DeskFooter setOpen={setOpen} />
            </div>
            <div className="phone-view">
                <Menu className={show ? 'main-open' : 'menu-back'} setShow={setShow} />
                <Header setShow={setShow} />
                <Brands setShow={setShow} />
                <NewsCards setShow={setShow} />
            </div>
            <FooterPhone setShow={setShow} />
        </div>
    );
}

function close() {
    let change = document.querySelector(".main-menu");
    change.classList.toggle("main-close")
    console.log("AKAL")
}

export default NewsP;
