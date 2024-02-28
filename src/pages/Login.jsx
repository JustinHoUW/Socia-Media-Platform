import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import '../Login.css';
import { TextInput } from "../components";
import CustomButton from '../components/CustomButton';
import Loading from '../components/Loading';
import talkingimage from '../images/shutterstock_1859210845.jpeg';

const Login = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [errMsg, setErrMsg] = useState({ message: "" }); // Initialize errMsg as an object
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // Your submit logic goes here
  }

  return (
    <div className="container">
      <div className="second-container">
        <div className="form-group has-success">
          <form action="" className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
            {/* LEFT SIDE */}
              <div className="card-wrapper">
                <div className="card">
                  <div className="card-body">
                    <p className="text-primary" style={{ fontSize: '90px', fontWeight: '900' }}>HitmeUp</p>
                    <p className="text-primary-emphasis" style={{ fontSize: '30px', fontWeight: '900' }}>Log in to your account</p>
                    <p className="text-primary-emphasis" style={{ fontSize: '35px', fontWeight: '600', opacity: '0.7' }}>Welcome back</p>
                    <p>Don't have an account? <Link to='/register'>Create Account</Link></p>
                    <img src={talkingimage} alt="Description of the image" style={{ width: '480px', height: '283.2px', marginTop: '22px', marginLeft: '-9px' }} />
                  </div>
                </div>
              </div>

            {/* RIGHT SIDE */}
            <div className="Edit-Signs">
              <p className="text-dark" style={{ top: '-15px', fontSize: '45px', fontWeight: '800' }}>Sign In</p>
              <div className="form-group">
                <label htmlFor="inputEmail" className="col-form-label mt-4">Email Address</label>
                <input
                  style={{ width: '438px' }}
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
                  style={{ width: '438px' }}
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Password"
                  id="inputPassword"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>
              <Link to="/reset-password">Forgot Password ?</Link>

              {errMsg?.message && (
                <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>
                  {errMsg?.message}
                </span>
              )}
              <div className='Login-Button'>
                {isSubmitting ? (
                  <Loading />
                ) : (
                  <CustomButton
                    type="submit"
                    containerStyles="btn btn-outline-dark"
                    title="Login"
                  />
                )}
              </div>
              <div className='w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'></div>
            </div>
            <div></div>
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
  );
};

export default Login;