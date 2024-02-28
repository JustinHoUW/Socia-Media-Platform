import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import '../Register.css';
import { TextInput } from "../components";
import CustomButton from '../components/CustomButton';
import Loading from '../components/Loading';
import talkingimage from '../images/nice-talking.png';


const Login = () => {
  const {
    register, handleSubmit, getValues, formState: { errors },
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
      <div className="second-container-register">
        <div className="form-group has-success">
          <form action="" className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
            {/* LEFT SIDE */}

            <div className="Edit-Left">
              <div className="card-wrapper-register">
                <div className="card-register">
                  <div className="card-body-register">
                    <p className="text-dark" style={{ fontSize: '35px', fontWeight: '600', opacity: '0.7' }}>Welcome!</p>
                    <p className="text-primary" style={{ fontSize: '90px', fontWeight: '900' }}>HitmeUp</p>
                    <p className="text-primary-emphasis" style={{ fontSize: '30px', fontWeight: '900', marginTop: '-40px' }}>Create your account</p>
                    <div>
                      <label htmlFor="inputFirstName" className="col-form-label mt-4">First Name</label>
                      <label htmlFor="inputLastName" className="col-form-label mt-4" style={{ marginLeft: '113px' }}>Last Name</label>

                      <div className="Fname-fields">
                        <TextInput
                          name='firstName'
                          placeholder='First Name'
                          type='text'
                          id="inputFirstName"
                          register={register("firstName", {
                            required: "First Name is required",
                          })}
                          error={errors.firstName ? errors.firstName?.message : ""}
                        />

                        <TextInput
                          name='lastName'
                          placeholder='Last Name'
                          type='text'
                          id='inputLastName'
                          register={register("lastName", {
                            required: "Last Name is required",
                          })}
                          error={errors.lastName ? errors.lastName?.message : ""}
                        />
                      </div>
                      <label htmlFor="inputEmail" className="col-form-label mt-4">Email Address</label>

                      <TextInput
                        name='email'

                        placeholder='email@example.com'
                        type='email'
                        id="inputEmail"
                        register={register("email", {
                          required: "Email Address is required",
                        })}
                        error={errors.email ? errors.email?.message : ""}

                      />
                      <label htmlFor="inputPassword" className="col-form-label mt-4">Password</label>
                      <label htmlFor="inputPassword" className="col-form-label mt-4" style={{ marginLeft: '122px' }}>Confirm Password</label>

                      <div className="password-fields">

                      <TextInput
  name='password'
  placeholder='Password'
  type='password'
  register={register("password", { // Change "email" to "password" here
    required: "Password is required",
  })}
  error={errors.password ? errors.password?.message : ""}
/>


                        

                        <TextInput
                          placeholder='Confirm Password'
                          type='password'
                          register={register("cPassword", {
                            validate: (value) => {
                              const { password } = getValues();

                              if (password != value) {
                                return "Passwords do not match";
                              }
                            },
                          })}
                          error={errors.cPassword && errors.cPassword.type === "validate"
                            ? errors.cPassword?.message
                            : " "
                          }

                        />


                      </div>


                      {errMsg?.message && (
                        <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>
                          {errMsg?.message}
                        </span>
                      )}
                      <hr className="my-1" /> {/* Add this line to create a separator */}

                      {isSubmitting ? (
                        <Loading />
                      ) : (
                        <CustomButton
                          type='submit'
                          title='Create Account'
                          containerStyles="btn btn-outline-primary"

                        />
                      )}


                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="Edit-Signs-register">
            <div className="card-wrapper-register">
                <div className="card-register">
                  <div className="card-body-register">
                  <p class ="text-dark" style={{fontSize: '40px', fontWeight: '800', marginTop:'200px' }}>Already have an account? </p>
                  <Link to='/login'  style={{fontSize: '40px'}}>Login</Link>
                  <img src={talkingimage} alt="Description of the image" style={{ width: '380px', height: '380px', marginTop: '-90px', marginLeft: '150px' }} /> 

                    </div>
                    </div>
                    </div>



            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;