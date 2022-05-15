import React from "react";
import Modal from "../Modal";
import "./Signup.css";
export default function Signup(props) {
  return (
    <Modal className="signup-modal" onClose={props.onCloseRegister}>
      <form className="form-dimensions">
        <div className="mb-1 custom-heading text-center">SIGN UP </div>
        <div className="mb-4 custom-subheading text-center">
          Create an account to continue
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label email-custom form-color"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleUsername"
            className="form-label username-custom form-color"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleUsername"
            aria-describedby="emailHelp"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-3">
          <div className="label-inline">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label form-color password-custom label-inline"
            >
              Password
            </label>
          </div>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Choose a strong password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Continue
        </button>
        <div className="custom-ending">
          Already have an account? <span>Login →</span>
        </div>
      </form>
    </Modal>
  );
}
