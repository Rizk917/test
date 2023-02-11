import React from "react";
import './PageSignUp.css'


function PageSignUp(){
    return(

        <div className="main">
            <div className="cercle"> 
                <div className="container">
                    <form className="signup">
                        <input  type="text" placeholder="Name" name="name" required/>
                        <input  type="text" placeholder="Email" name="uname" required/>
                        <input  type="password" placeholder="Password" name="psw" required/>
                    </form>
            <div className="signLog">
                <div className="link-wrap">
                    <a href="www.google.com" className="last">Sign Up</a>
                    <a href="www.google.com">Log In</a>
                </div>
            </div>
                </div>
            </div>
        </div>
        
    )
}


export default PageSignUp