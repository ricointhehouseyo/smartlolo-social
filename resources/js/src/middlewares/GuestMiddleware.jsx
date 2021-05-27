import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { UserContext } from "../Context";

const GuestMiddleware = ({ component, path, children }) => {
    const [user] = useContext(UserContext);

    return (
        <Route
            path={path}
            component={user ? () => <Redirect to="/" /> : component ?? children}
        />
    );
};

export default GuestMiddleware;
