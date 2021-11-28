import React from "react";

import "./Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="login">
          <h2>Log in</h2>
        </div>
        <div class="login-form">
          <div class="employee-login">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
