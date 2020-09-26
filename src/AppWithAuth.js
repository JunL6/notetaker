import React from "react";
import { SignIn, SignUp } from "aws-amplify-react";
import config from "./aws-exports";
import CustomSignIn from "./CustomSIgnIn_/CustomSignIn";
// import CustomSignUp from "./CustomSignUp_";
import SignUpCustom from "./SignUpCustom";
import App from "./App";
import { Authenticator } from "aws-amplify-react";
import "@aws-amplify/ui/dist/style.css";

class AppWithAuth extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div
      // className="container-fluid d-flex justify-content-center"
      >
        <Authenticator hide={[SignIn, SignUp]} amplifyConfig={config}>
          <CustomSignIn />
          {/* <CustomSignUp /> */}
          <SignUpCustom />
          <App />
        </Authenticator>
      </div>
    );
  }
}

export default AppWithAuth;
