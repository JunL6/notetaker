import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { SignUp } from "aws-amplify-react";

const INITIAL_STATE = {
  username: "",
  password: "",
  email: "",
  phone_number: "",
  tier: 0,
  count: 0,
};

export default class SignUpCustom extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"]; /* I don't know what this is for */
    this.state = INITIAL_STATE;

    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleTierChange = this.handleTierChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  // handleUsernameChange(e) {
  //   console.log(e.target);
  //   this.setState({ username: e.target.value });
  // }

  // handlePasswordChange(e) {
  //   this.setState({ password: e.target.value });
  // }

  // handleEmailChange(e) {
  //   this.setState({ email: e.target.value });
  // }

  // handlePhoneNumberChange(e) {
  //   this.setState({ phoneNumber: e.target.value });
  // }

  handleTierChange(e) {
    console.log(e.target);
    this.setState({ tier: e.target.value });
  }

  // componentDidUpdate() {
  //   console.log(this.state.username);
  // }

  handleSubmit() {
    let { username, password, email, phone_number, tier } = this.state;
    phone_number = "+1" + phone_number;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
        "custom:tier": tier,
      },
    })
      .then((data) => {
        console.log(data);
        this.setState(INITIAL_STATE);
        this.changeState("confirmSignUp", data.user.username);
      })
      .catch((err) => {
        console.log("error signing up", err);
      });
  }

  showComponent(theme) {
    console.log(this.state);
    return (
      <div>
        SignUpCustom
        <form>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              key="username"
              name="username"
              value={this.state.username}
              // onChange={this.handleUsernameChange}
              // onChange={this.handleInputChange}
              onChange={this.handleTextInputChange}
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              key="password"
              name="password"
              // onChange={this.handleInputChange}
              // onChange={this.handlePasswordChange}
              onChange={this.handleTextInputChange}
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
              // onChange={this.handleInputChange}
              // onChange={this.handlePasswordChange}
              onChange={this.handleTextInputChange}
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
              // onChange={this.handlePhoneNumberChange}
              onChange={this.handleTextInputChange}
              type="text"
              required
            />
          </div>
          <div className="mb-4" onChange={this.handleTierChange}>
            <label htmlFor="custom:tier">Choose tier</label>
            <input
              type="radio"
              id="tier0"
              // key="username"
              name="custom:tier"
              value="0"
            />
            <label htmlFor="tier0">Monthly subscrption</label>
            <input
              type="radio"
              id="tier1"
              // key="username"
              name="custom:tier"
              value="1"
            />
            <label htmlFor="tier1">Annual subscription</label>
            <input
              type="radio"
              id="tier2"
              // key="username"
              name="custom:tier"
              value="2"
            />
            <label htmlFor="tier2">Pay per view</label>
          </div>
          <div className="flex items-center justify-between">
            <button type="button" onClick={this.handleSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}
