import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/register', formData);
      console.log(response.data);

      // Assuming your backend sends a token upon successful registration
      // Save the token to localStorage or a state management solution
      // For simplicity, let's save it to localStorage

      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };


  return (
    <div className="Register template d-flex justify-content-center align-items-center w-100 vh-100 bg-dark">
    <div className='from_container  p-5 rounded bg-white'>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="User Name" className="form-label">
           User Name
          </label>
          <input type="text"className="form-control"
            id="name"
            name="username"
         
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input type="email"className="form-control"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2 form-check">
          <input type="checkbox" className="form-check-input" id="remember" value="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
            Sign Up
          </button>

        <div className="mt-3">
          <Link to="/Home">Don't have an account? Sign Up</Link>
        </div>
      </form>
    </div>
  </div>
);
  }
export default Registration;

