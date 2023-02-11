import React, { useState } from "react";

const LgiPop = () => {
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
          if (data.status === 400) setError("Incorrect credentials");

          if (data.status === 201) {
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("loggedIn", true);

            window.location.href = "/dashboard";
          }
        });
    }
  };

  return (
    <div className="pop-up-login">
      <div className="rel">
        <div className="circle-lg-1"></div>
        <div className="circle-lg-2"></div>
        <form className="login-form" onSubmit={handleSubmit}>
          {error === "Email is required" && <p className="errorr">{error}</p>}
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error === "Password is required" && <p className="error">{error}</p>}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="formlg-sbmt" value="login" type="submit">
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

export default LgiPop;

function drop() {
  let change = document.querySelector(".pop-up-login");
  change.classList.toggle("pop-up-login-show");
}
