import React from "react";
import "./LoginPage.css";

export default function LoginPage(props) {

  return (
    <div className="loginpage">
      <form className="form-dimensions">
          <div className="mb-4 custom-heading">
              WELCOME BACK
          </div>
          <div className="mb-4 custom-subheading">
              Login into your account
          </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label email-custom-login form-color">
            Email or Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email or username"
          />
          
        </div>
        <div className="mb-3">
            <div className="label-inline">
          <label htmlFor="exampleInputPassword1" className="form-label form-color password-custom-login label-inline">
            Password                                     
          </label>
          <label htmlFor="exampleInputPassword2" className="forgot-password-custom form-label form-color label-inline">
              Forgot password?
          </label>
            </div>
          
          
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={() => props.onSubmitLogin()} >
          Login now
        </button>
        <div className="custom-ending">
            Not registered yet? <span>Register →</span>
        </div>
      </form>
    </div>
  );
}
