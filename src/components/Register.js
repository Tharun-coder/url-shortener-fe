import React, { useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSubmit = async () => {
    email === "" ||
      password === "" ||
      (cpassword === "" && alert("Enter the details to proceed"));

    let res = await fetch(
      `https://urlshortener-be.herokuapp.com/auth/register`,
      {
        method: "POST",
        body: JSON.stringify({ email, password, cpassword }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      alert("User Registration Successfull");
    } else if (res.status === 400) {
      alert("Email ID already registered");
    } else {
      alert("Could not regiser due to server error. Please try again later");
    }
  };

  return (
    <div className="container-main">
      <h1>Welcome to the site</h1>
      <div className="register">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          className="form-control"
          placeholder="Enter your Password"
          value={cpassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>

        <div className="register">
          <Link to="/">Go Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
