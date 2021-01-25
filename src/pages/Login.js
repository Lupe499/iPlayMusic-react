import { Link } from '@reach/router';
import './Login.css';

function Login() {
  return (
    <div className="loginPage">
      <h1 className="Login">Log In</h1>

      <form className="loginForm">
          <label htmlFor="username">Username</label>
          <div className="usernameDiv">
            <input type="text" id="username" placeholder="Enter your username" />
            <i className="fas fa-user"></i>
          </div>
          <label htmlFor="password">Password</label>
          <div className="passwordDiv">
            <input type="text" id="password" placeholder="Enter your password" />
            <ion-icon name="key"></ion-icon>
          </div>
          <div className="loginButtonsDiv">
            <Link to="/featured" className="loginButton">Log in</Link>
            <button className="fingerprint"><ion-icon name="finger-print-outline"></ion-icon></button>
            <p className="fingerprintText">One-Touch Login</p>
          </div>
      </form>
    </div>
  );
}

export default Login;
