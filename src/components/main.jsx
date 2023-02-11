import '../App.css';
import Header from '../components/Header';
import Brands from '../components/pop-brands';
import Cards from '../components/Cards';
import FooterPhone from '../components/footer';
import Menu from '../components/menu';
import DeskHeader from '../components/deskheader';
import DeskBody from '../components/DeskBody';
import DeskFooter from '../components/deskfooter';
import { useState } from 'react';


function Home() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(true);

    return (
        <div className="main">
            <div className="desktop-view">
                <DeskHeader open={open} setOpen={setOpen} />
                <DeskBody setOpen={setOpen} />
                <DeskFooter setOpen={setOpen} />
            </div>
            <div className="phone-view">
                <Menu className={show ? 'main-open' : 'menu-back'} setShow={setShow} />
                <Header setShow={setShow} />
                <Brands setShow={setShow} />
                <Cards setShow={setShow} />
            </div>
            <FooterPhone setShow={setShow} />
        </div>
    );
}



export default Home;
