import axios from "axios";
import React, { useState } from "react";

const SignUpP = () => {
    const [myData, setmyData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const { fullName, email, password } = myData;

    const onChange = (e) => {
        setmyData({ ...myData, [e.target.name]: e.target.value });
    };

    const [error, setError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!fullName) {
            setError("Full Name is required");
            return;
        }
        if (!email) {
            setError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }

        setError("");

        const newContact = {
            fullName: fullName,
            email: email,
            password: password,
        };
        try {
            await axios.post("https://mobilixbackend.onrender.com/contactus", newContact);
            setmyData({
                fullName: "",
                email: "",
                Message: "",
            });
        } catch (err) {
            console.log("error", err.response.data);
        }
    };
    return (
        <div className="cnt-wrapper">
            <div className="cntct-us" id="cntc-us">
                <div className="div">
                    <h1 className="H1">Sign up</h1>
                </div>
                <form className="contact-form" onSubmit={onSubmit}>
                    {error === "Full Name is required" && (
                        <p className="errorr">{error}</p>
                    )}
                    <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        placeholder="Enter your Name "
                        onChange={onChange}
                    />
                    {error === "Email is required" && (
                        <p className="errorr">{error}</p>
                    )}
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Enter your email "
                        onChange={onChange}
                    />

                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={onChange}
                    />
                    <br />
                    <button className="form-sbmt" type="submit">Submit</button>
                </form>
                <h3 className="help">Send us a <br></br>message by filling <br></br>up this form</h3>
                <div className="cntct-bck">
                    <a href="/">Back</a>
                </div>
            </div>
            <div className="sign-up-wrapper">
                <a href="/" className="fill-space">Return to Home Page</a>
            </div>
        </div>
    );
};

export default SignUpP;