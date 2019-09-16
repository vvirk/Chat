import React, { useRef } from 'react';
import { 
  Route,
  Link, 
} from 'react-router-dom';

//styles
import s from './styles/Login.module.scss';

export const Login = props => {
  const { addUserName } = props;
  const userName = useRef();
  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <Route 
          render={({ history}) => (
            <input 
              type="text"
              className={s.input}
              onKeyUp={e => (e.keyCode === 13) 
                ? addUserName(userName.current.value) && history.push("/"): null}
              placeholder="Please, enter your name"
              ref={userName}
            />
          )}
        />
        <Link
          to={"/"}
          className={s.btn}
          onClick={()=>addUserName(userName.current.value)}
        >
         Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
