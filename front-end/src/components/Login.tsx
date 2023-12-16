import  { useState, FormEvent } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      console.log('test')
      const response = await axios.post("http://localhost:3000/api/v1/users/login", {
        email,
        password
      });
      

      if (response.data.message === "check the Headers") {
        localStorage.setItem('token',response.data.message)
        navigate("/home", { state: { id: email } });
      } else if (response.data.message === "Password is incorrect!") {
        alert("Password is incorrect!");
      } else if (response.data.message === "User not found!") {
        alert("User not found!");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
      
    }
  }

 

  return (
    <div className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-dark">
      <div className='from_container p-5 rounded bg-white'>
        <form onSubmit={submit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              autoComplete="email"
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder="Email"
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
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder="Password"
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
            Sign In
          </button>

          <div className="mt-3">
            <Link to="/Registration">Don't have an account? Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
