import { Link } from "@reach/router";
import "./Login.css";
import querystring from "querystring";
function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "dd0fbfb853134263b6c53599d371925b",
		scope: "user-read-private user-read-email",
		redirect_uri: `https://iplay-music-lucas.netlify.app/callback`,
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh",
	});
	return (
		<div className="loginPage">
			<h1 className="Login">Log In</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Spotify Log in</a>
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
					<Link to="/featured" className="loginButton">
						Log in
					</Link>
					<button className="fingerprint">
						<ion-icon name="finger-print-outline"></ion-icon>
					</button>
					<p className="fingerprintText">One-Touch Login</p>
				</div>
			</form>
		</div>
	);
}

export default Login;
