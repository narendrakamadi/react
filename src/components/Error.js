import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Oops! Page Not Found</h2>

            <h2 className="error-title">{ err.status }: { err.statusText }</h2>

            <p className="error-text">
                Looks like this page got lost on the way to your plate 🍽️
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link to="/" className="error-btn">
                🍔 Go Back to Home
            </Link>
        </div>
    );
}

export default Error;