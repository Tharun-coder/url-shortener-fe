import React, { useState } from "react";
import { useHistory } from "react-router";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    email === "" && password === "" && alert("Enter the details to proceed");

    let res = await fetch(
      `https://urlshortener-be.herokuapp.com/auth/login/${email}/${password}`
    );
    if (res.status === 200) {
      history.push("/home");
    } else if (res.status === 400) {
      alert("User not registered");
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className="container-main">
      <h1>Welcome to the site</h1>
      <div className="login">
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Login
        </button>

        <div className="register">
          <Link to="/forget-password">Forget Password?</Link>
          <div>
            New User? <Link to="/register">Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
