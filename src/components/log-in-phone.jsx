import React, { useState } from "react";

const LogIn = () => {
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
    } else if (!password) {
      setError("Password is required");
    } else {
      fetch("https://mobilixbackend.onrender.com/user/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");

          if ((data.status = 400)) {
            
              setError("Incorrect credentials");
            
          }
          if ((data.status = 201)) {
            alert("login successful");
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("loggedIn", true);

            window.location.href = "/dashboard";
          }
        });
    }
  };

  return (
    <div className="cnt-wrapper">
      <div className="cntct-us" id="cntc-us">
        <div className="div">
          <h1 className="H1">Log in</h1>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="chat">Let’s Talk, How can we help?</p>
          <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
          />
          {error === "Email is required" && <p className="errorr">{error}</p>}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error === "Password is required" && (
            <p className="errorr">{error}</p>
          )}
          <br />

          <div className="cntct-bck">
            <a href="/">Back</a>
            <button className="form-sbmt" type="submit">
              Submit
            </button>
          </div>
        </form>
        <h3 className="help">
          Send us a <br></br>message by filling <br></br>up this form
        </h3>
      </div>
    </div>
  );
};

export default LogIn;
