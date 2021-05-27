import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { UserContext } from "../Context";

const AuthMiddleware = ({ component, path, children }) => {
    const [user] = useContext(UserContext);

    return (
        <Route
            path={path}
            component={user ? component ?? children : () => <Redirect to="/" />}
        />
    );
};

export default AuthMiddleware;
