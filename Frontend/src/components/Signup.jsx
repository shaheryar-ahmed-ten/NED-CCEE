// src/components/Auth/Signup.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Signup = () => {
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <>
      <Link to="/">
              <Button variant="primary">Back</Button>
        </Link>
      <div className="container d-flex justify-content-center align-items-center vh-100">
         
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Signup</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" className="form-control mb-3" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} required />
          <button className="btn btn-success w-100">Signup</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Signup;
