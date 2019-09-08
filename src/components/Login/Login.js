import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

//styles
import s from './styles/Login.module.scss';

export const Login = props => {
  const [userName, setUserName] = useState("");
  const { addUserName } = props;
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
      <Route render={({ history}) => (
        <input 
          type="text"
          className={s.input}
          onChange={e => setUserName(e.target.value)}
          onKeyUp={e => (e.keyCode === 13) 
            ? addUserName(userName) && history.push("/"): null}
          placeholder="Please, enter your name"
        />
        )} />
        <Link
          to={"/"}
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
