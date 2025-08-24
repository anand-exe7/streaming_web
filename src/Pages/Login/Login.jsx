import React, { useState } from "react";
import "./Login.css";
import flexy1 from "../../assets/flexy1.png";




const Login = () => {
  const [signState, setSignState] = useState("Sign Up"); 

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={flexy1} alt="Flexy Logo" />
        <h1>{signState}</h1>
        {signState=== "Sign Up"?<h2>To Start Watching</h2>:<></>}
        

        <div className="Login-form">
            {signState=== "Sign Up" ?  <input type="text" placeholder="Username" /> :<></>}
         
          <input type="email" placeholder="E-Mail Id" />
          <input type="password" placeholder="Password" />
          <button type="submit">{signState}</button>
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>

        <div className="switch">
            {signState==="Sign Up" ? <p>Already Logined? <span onClick={() =>{setSignState("Sign In")}}> Sign In</span></p> : <p>New User To Netflix? <span onClick={() =>{setSignState("Sign Up")}}>Sign Up</span></p>}
          
          
        </div>
      </div>
    </div>
  );
};

export default Login;

