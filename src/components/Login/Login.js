import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = props => {
  const [userName, setUserName] = useState("");
  const { addUserName } = props;
  return (
    <div className="login-wrap">
      <div className="login-inner">
        <input 
          type="text"
          className="user-name-input message-input"
          onChange={e => setUserName(e.target.value)}
          placeholder="Please, enter your name"
        />
        <Link
          to={userName ? "/chat" : "#"}
          className="login-btn message-input-btn"
          onClick={()=>addUserName(userName)}
        >
         Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
