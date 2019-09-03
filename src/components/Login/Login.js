import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import s from './styles/Login.module.scss';

export const Login = props => {
  const [userName, setUserName] = useState("");
  const { addUserName } = props;
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <input 
          type="text"
          className={s.input}
          onChange={e => setUserName(e.target.value)}
          placeholder="Please, enter your name"
        />
        <Link
          to={userName ? "/chat" : "#"}
          className={s.btn}
          onClick={()=>addUserName(userName)}
        >
         Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
