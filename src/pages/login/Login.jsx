import './login.scss';
import { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../contex/AuthContext';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialShit</h3>
          <span className="loginDesc">Connect with your alcoholic friends</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              ref={email}
              required
              placeholder="Email"
              type="email"
              className="loginInput"
            />
            <input
              ref={password}
              required
              placeholder="Password"
              type="password"
              minLength="6"
              className="loginInput"
            />
            <button type="submit"className="loginBtn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                'Login'
              )}
            </button>
            <span>Forgot Password ?</span>
            <center>
              <Link to="/register">
            <button className="newAccaunt">
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                'Create a New Accaunt'
              )}
            </button>
            </Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
