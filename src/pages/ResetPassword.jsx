import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { TextInput } from "../components";
import Loading from '../components/Loading';
import CustomButton from '../components/CustonButton';
import '../ResetPassword.css';


const ResetPassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onChange",

  });

  const onSubmit = async (data) => { };

  return <div className='Container-Reset'>
    <div className='box'>
      <div className='items'>
        <p class="text-primary-emphasis" style={{ fontSize: '35px', fontWeight: '900', marginLeft: '-40px' }}>Account Recovery</p>
        <p class="text-primary" style={{ marginLeft: '-115px', fontSize: '20px', marginTop: '-25px',  fontWeight: '600', opacity: '0.7'}}>We'll email you a link that will instantly log you in</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name='email'
            className='SendEmail'
            placeholder='email@example.com'
            type='email'
            id="inputEmail"
            styles ={{ width: '500px', marginLeft: '-140px', marginTop: '90px', height: '45px'}}
            register={register("email", {
              required: "Email Address is required",
            })}
            error={errors.email ? errors.email?.message : ""}
          />{errMsg?.message && (
            <span className={`text-sm ${errMsg?.status === "failed" ? "text-[#f64949fe]" : "text-[#2ba150fe]"}`}>
              {errMsg?.message}
            </span>
          )}

          {isSubmitting ? (
            <Loading />
          ) : (
            <CustomButton
              type='submit'
              title='Send Email'
              containerStyles="btn btn-outline-primary"
              styles ={{marginLeft: '30px'}}

            />
          )}

        </form>
      </div>
    </div>
  </div>
};

export default ResetPassword