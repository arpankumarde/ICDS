import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cred, setCred] = useState({
    email: "",
    pass: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: cred.email,
        pass: cred.pass,
      }),
    });
    const databack = await response.json();
    if (!databack.success) {
      alert("Enter valid credentials!");
    } else {
      localStorage.setItem("userEmail", cred.email);
      localStorage.setItem("authToken", databack.authToken);
      navigate("/");
    }
  };

  return (
    <>
      <div>Login</div>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={cred.email}
              onChange={handleChange}
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="pass"
              value={cred.pass}
              onChange={handleChange}
              className="form-control"
              id="InputPassword"
              required
            />
          </div>
          <button type="submit" className="m-3 ms-0 btn btn-success">
            Login
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            New user?
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
