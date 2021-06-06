import React, { useState } from "react";
import { useHistory } from "react-router";
import "../styles/ForgetPass.css";
import { Link } from "react-router-dom";

function ForgetPass(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    email === "" && alert("Enter the details to proceed");

    let res = await fetch(
      `https://urlshortener-be.herokuapp.com/auth/forgot_password/${email}`
    );

    if (res.status === 200) {
      alert(
        "Secret code to reset the Password send to your mail ID. Please Check"
      );
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="container-main">
      <h1>Welcome to the site</h1>
      <div className="forget_pass">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <div className="register">
          <Link to="/">Go Back to Home Page</Link>
          <Link to="/updatepass">Click Here to Update Password</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
