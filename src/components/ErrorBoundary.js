import { Link, Redirect } from "@reach/router";
import { Component } from "react";
import { axios } from "axios";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
			redirect: false,
		};
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught an error", error, info);
	}

	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}

		if (this.state.hasError) {
			return (
				<>
					<h1>500: There was an error</h1>
					<p>
						<Link to="/">Click here</Link> or wait 5 seconds to be redirected
					</p>
				</>
			);
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
