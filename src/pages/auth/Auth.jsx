import React from "react";
import "./Auth.css";

import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="leftSide">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>ST Media</h1>
          <h6>Explore thinks and Think Beyond</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login/>
    </div>
  );
};


function Login() {
    return (
      <div className="rightSide">
        <form action="" className="infoForm authForm">
          <h3>Login</h3>
  
         
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
           
          </div>
          <div>
            <span style={{fontSize:"12px"}}>Don't have an account, Sign up</span>
            <button className="button infoBtn" type="submit">
            Signup
          </button>
          </div>
         
        </form>
      </div>
    );
  }



function SignUp() {
  return (
    <div className="rightSide">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="cPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span style={{fontSize:"12px"}}>Already have a account. Login!</span>
        </div>
        <button className="button infoBtn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
