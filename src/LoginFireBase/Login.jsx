import React, { useState } from 'react';
import './style.css';
import './script.js';



function Login() {

  return (
    <>

      <div class="container">
        <div class="wrapper">
          <div id="auth" class="authentication">
            <div class="wrapper">
              <div id="login" class="card">
                <div class="wrapper">
                  <div class="animation form login">
                    <div class="wrapper">
                      <h3 class="title">
                        Sign in
                      </h3>


                   {/* signIN */}
                      <form>
                        <div class="form-group input">
                          <label>
                            Email
                          </label>
                          <input type="email" name="email" id="user-email-login" class="user-email"/>
                        </div>
                        <div class="form-group input">
                          <label>
                            Password
                          </label>
                          <input type="password" name="password" id="user-password-login" class="user-password"/>
                        </div>
                        <button type="submit" class="button color-1 login" id="button-login">
                          Login
                        </button>



                       {/* signUP */}
                      </form>
                      <a href="#" id="button-register-switch">
                        Create Account
                      </a>
                    </div>
                  </div>
                  <div class="animation note login">
                    <div class="wrapper">
                      <h1>
                        Hello There
                      </h1>
                      <p>
                        Don't have an account?
                      </p>
                      <p>
                        Sign up with us today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="register" class="card">
                <div class="wrapper">
                  <div class="animation form register">
                    <div class="wrapper">
                      <h3 class="title">
                        Create Account
                      </h3>
                      <form>
                        <div class="form-group input">
                          <label>
                            Email
                          </label>
                          <input type="email" name="email" id="user-email-register" class="user-email"/>
                        </div>
                        <div class="form-group input">
                          <label>
                            Password
                          </label>
                          <input type="password" name="password" id="user-password-register" class="user-password"/>
                        </div>
                        <div class="form-group input">
                          <label>
                            Confirm Password
                          </label>
                          <input type="password" name="password" id="user-password-register-confirm" class="user-password-confirm"/>
                        </div>
                        <button type="submit" class="button color-1 login" id="button-register">
                          Create
                        </button>
                      </form>




                      <a href="#" id="button-login-switch">
                        Already have an account?
                      </a>
                    </div>
                  </div>
                  <div class="animation note register">
                    <div class="wrapper">
                      <h1>
                        Let's get you started
                      </h1>
                      <p>
                        Be part of our awesome team and have fun with us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;