import { useRef } from 'react';
import './register.scss';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value ) {
        password.current.setCustomValidity("Password don't match!")
    } else {
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        try {
            await axios.post('/auth/register', user)
            history.push("/login")
        } catch (error) {
            console.log(error)
        }
    }
  };

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
              ref={username}
              required
              placeholder="User Name"
              className="loginInput"
            />
            <input
              ref={email}
              required
              type="email"
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              minLength="6"
              required
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              ref={passwordAgain}
              minLength="6"
              required
              type="password"
              placeholder="Password Again"
              className="loginInput"
            />
            <button className="loginBtn" type="submit">Sign Up</button>
            <center>
            <Link className="newAccauntLink" to="/login">
              <button className="newAccaunt">Log in to Account</button>
            </Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
