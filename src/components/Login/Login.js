import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = (props) => {
  const [userName, setUserName] = useState("");
  console.log(userName);
  return (
    <div className="login-wrap">
      <div className="login-inner">
        <input 
          type="text"
          className="user-name-input"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Please, enter your name"
        />
        <Link
          to={userName ? "/chat" : "#"}
          className="login-btn"
          onClick={()=>props.addUserName(userName)}
        >
         Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
