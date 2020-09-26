import React from "react";
import { SignUp } from "aws-amplify-react";

export default class CustomSignUp extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"]; /* I don't know what this is for */
  }

  showComponent(theme) {
    return (
      <div>
        <form>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              key="username"
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              key="email"
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="email address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              id="phone_number"
              key="phone_number"
              name="phone_number"
              onChange={this.onPhoneNumberChanged}
              type="text"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="tier">Choose tier</label>
            <input
              type="radio"
              id="tier1"
              // key="username"
              name="tier"
              value="1"
              onChange={this.handleInputChange}
            />
            <label for="tier1">Monthly subscrption</label>
            <input
              type="radio"
              id="tier2"
              // key="username"
              name="tier"
              value="2"
              onChange={this.handleInputChange}
            />
            <label for="tier2">Annual subscription</label>
            <input
              type="radio"
              id="tier3"
              // key="username"
              name="tier"
              value="3"
              onChange={this.handleInputChange}
            />
            <label for="tier3">Pay per view</label>
          </div> */}
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => super.signUp()}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
