import React from "react";
import { SignIn } from "aws-amplify-react";
import "./CustomSignIn.css";

const STYLE_SIGNUP = {
  "margin-bottom": "20px",
  padding: "35px 40px",
  "text-align": "left !important",
  display: "inline-block",
  "min-width": "460px",
  "border-radius": "6px",
  "box-shadow": "1px 1px 4px 0 rgba(0,0,0,0.15)",
  "box-sizing": "border-box",
};

export default class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    // this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    console.log(props);
  }

  showComponent(theme) {
    return (
      <div
        className="form-container"
        style={{
          textAlign: "center",
          marginTop: "20px",
          margin: "5% auto 50px",
        }}
      >
        <div className="mx-auto text-center border form-div">
          <div className="header" style={{ marginBottom: "24px" }}>
            <span>Sign in to your account</span>
          </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                key="username"
                name="username"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                key="password"
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="******************"
              />
              <p className="text-grey-dark text-xs">
                Forgot your password?{" "}
                <button
                  className="btn btn-link"
                  onClick={() => super.changeState("forgotPassword")}
                >
                  Reset Password
                </button>
              </p>
            </div>
            <div className="mb-6">
              <button
                className="btn btn-primary btn-block"
                type="button"
                onClick={() => {
                  super.signIn();
                }}
              >
                Login
              </button>
            </div>
            <div>
              <p className="text-muted">
                No Account?
                <button
                  className="btn btn-link"
                  onClick={() => super.changeState("signUp")}
                >
                  Create account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
