import React, { useState } from "react";
import "../styles/UpdatePass.css";
import { Link } from "react-router-dom";

function UpdatePass(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    email === "" &&
      password === "" &&
      cpassword === "" &&
      secret === "" &&
      alert("Enter the details to proceed");

    console.log(secret, cpassword);
    let res = await fetch(
      `https://nodepassword.herokuapp.com/auth/password_reset/${secret}/${cpassword}`,
      {
        method: "PUT",
        body: JSON.stringify(),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      alert("Password Updated Successfully");
    } else {
      alert("Error Occured");
    }
  };

  return (
    <div className="container-main">
      <h1>Welcome to the site</h1>
      <div className="update_pass">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="secret">Secret Code (Send Via Mail)</label>
        <input
          type="text"
          id="secret"
          className="form-control"
          placeholder="Enter Secret code"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
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
          Submit
        </button>

        <div className="register">
          <Link to="/">Go Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
}

export default UpdatePass;
