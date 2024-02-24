import React from 'react';
import '../Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className='signin-signup'>
        <div className="second-container">
          <div className="form-group has-success">

            <form action="" className="sign-in-form">
              <div className='Left-Texts'>

                <p className="text-primary" style={{ fontSize: '70px', fontWeight: '900' }}>HitmeUp</p>
                <p class="text-primary-emphasis" style={{ fontSize: '30px', fontWeight: '900' }} >Log in to your account</p>

                <p className="text-primary-emphasis" style={{ fontSize: '35px', fontWeight: '600', opacity: '0.7' }}>Welcome back</p>
              </div>
              {/* Edit-Signs div wrapping both Sign in and Sign Up */}
              <div className="Edit-Signs">
                <h2 style={{ top: '-15px' }}>Sign in</h2>
                <div className="form-group">
                  <label className="col-form-label mt-4" htmlFor="inputDefault"></label>
                  <input type="text" className="form-control" placeholder="Username" id="inputDefault" style={{ width: '300px' }}></input>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="off" style={{ width: '300px' }} ></input>
                </div>
                <button type="submit" className="btn">Login</button>
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

                <h2 style={{ top: '90px' }}>Sign Up</h2>
                <button type="submit" className="btn">Sign up</button>
                <p className="social-text">Or sign in with social platform</p>
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
              {/* End of Edit-Signs div */}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
