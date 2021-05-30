import { useEffect } from "react";

const RootFragment = ({ className, children }) => {
    const rootElement = document.getElementById("root");
    useEffect(() => {
        rootElement.className = className;
    }, []);

    return children;
};

export default RootFragment;
