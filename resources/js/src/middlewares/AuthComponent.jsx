import { useContext, Fragment } from "react";

import { UserContext } from "../Context";

const AuthComponent = ({ children }) => {
    const [user] = useContext(UserContext);

    return <Fragment>{user && children}</Fragment>;
};

export default AuthComponent;
