import React from 'react';
import { useForm } from "react-hook-form"
import '../Login.css';
import TextInput from '../components/TextInput';

const Login = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <div className="container">
      <div className='signin-signup'>
        <div className="second-container">
          <div className="form-group has-success">
            <form action="" className="sign-in-form">
              <div className='Left-Texts'>
                <p className="text-primary" style={{ fontSize: '70px', fontWeight: '900' }}>HitmeUp</p>
                <p className="text-primary-emphasis" style={{ fontSize: '30px', fontWeight: '900' }}>Log in to your account</p>
                <p className="text-primary-emphasis" style={{ fontSize: '35px', fontWeight: '600', opacity: '0.7' }}>Welcome back</p>
              </div>
              <div className="Edit-Signs">
                <h2 style={{ top: '-15px' }}>Sign in</h2>
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-form-label mt-4">Email Address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    placeholder="Username"
                    id="inputEmail"
                    {...register("username", { required: "Username is required" })}
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="col-form-label mt-4">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Password"
                    id="inputPassword"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <button type="submit" className="btn">Sign up</button>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
