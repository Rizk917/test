import React from "react";

function DeskBody (props){
        return <div className="main-hero" onClick={()=>props.setOpen(true)}>
            <h1>Our latest <br></br>updates</h1>
            <div className="updates">
            <div className="item-1"> 
                <a href="#"></a>
            </div>
            <div className="item-2">
                <a href="#"></a>
            </div>
            </div>
        </div>
    }

export default DeskBody;