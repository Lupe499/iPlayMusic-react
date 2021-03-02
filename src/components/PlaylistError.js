import { Component } from "react";

class PlaylistError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Ups, noget gik galt</h1>
                    <p>Prøv igen senere.</p>
                    <p><small>Hvis denne fejl bliver ved med at opstå, kontakt administratoren på admin@email.com</small></p>
                </>
            );
        }

        return this.props.children;
    }
}
export default PlaylistError

  