import axios from "axios";
import React, { useState } from "react";

const SignUpD = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const { email, password, fullname } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullname) {
            setError("Full name is required");
        } else if (!email) {
            setError("Email is required");
        } else if (!password) {
            setError("Password is required");
        } else {
            setError("");
            try {
                const newUser = { email, password };
                await axios.post("YOUR_API_ENDPOINT_FOR_LOGIN", newUser);
                // Handle successful login, e.g. by storing the token in local storage
                // ...
            } catch (err) {
                console.error(err.response.data);
                // Handle login error, e.g. by displaying an error message
                // ...
            }
        }
    };

    return (
        <div className="sign-up-login">
            <div className="rel">
                <div className="circle-lg-3"></div>
                <div className="circle-lg-2"></div>
                <form className=" login-form signUp-form" onSubmit={handleSubmit}>
                    {error === "Full name is required" && (
                        <p className="errorr">{error}</p>
                    )}
                    <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        placeholder="Your Name"
                        onChange={handleChange}
                    />
                    {error === "Email is required" && (
                        <p id="errorr-1">{error}</p>
                    )}
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Your email"
                        onChange={handleChange}
                    />
                    {error === "Password is required" && (
                        <p id="errorr-2">{error}</p>
                    )}
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Your password"
                        onChange={handleChange}
                    />
                    <button className="formlg-sbmt" type="submit">
                        Submit
                    </button>
                </form>
                <div className="arrow-back">
                    <a href="/" onClick={drop}></a>
                </div>
            </div>
        </div>
    );
};

export default SignUpD;

function drop() {
    let change = document.querySelector(".sign-up-login");
    change.classList.toggle("sign-up-login-show");
}