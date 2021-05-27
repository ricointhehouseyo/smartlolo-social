import { useContext, Fragment } from "react";

import { UserContext } from "../Context";

const GuestComponent = ({ children }) => {
    const [user] = useContext(UserContext);

    return <Fragment>{!user && children}</Fragment>;
};

export default GuestComponent;
