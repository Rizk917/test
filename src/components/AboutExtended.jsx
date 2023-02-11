import React from "react";

function AboutExtended(props) {
    return (
        <>
            <div className="about_us" >
                <div className='div'>
                    <h1 className='H1'>About us</h1>
                </div>
                <div className="hfb">
                    <h4 className='H3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborism.
                    </h4>
                    <a href='/' className='Button'>Back</a>
                </div>
            </div>
            <div className="light-blue" onClick={() => props.setOpen(true)}></div>
            <div className="about-us-2" onClick={() => props.setOpen(true)}>
                <h1 className='hed'>ABOUT US</h1>
                <h4>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perspiciatis id dolores numquam corrupti rerum velit possimus, veniam, placeat atque quam magni assumenda tempore harum quod consectetur minima, consequuntur consequatur.
                </h4>
                <div className="Button">
                    <a href='/'>Back</a>
                </div>
            </div>
            <div className="linear" onClick={() => props.setOpen(true)}></div>
        </>
    )
}


export default AboutExtended;