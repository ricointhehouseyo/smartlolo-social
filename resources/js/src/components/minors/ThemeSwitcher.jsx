import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../Context";
import Switcher from "./Switcher";

const ThemeSwitcher = ({ icon }) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [dark, setDark] = useState(theme == "dark" ? true : false);

    useEffect(() => setTheme(dark ? "dark" : "light"), [dark]);

    return (
        <div className="rounded-full bg-transparent px-1 py-1 flex  items-center space-x-1">
            <span className="text-sm">{icon && (dark ? `🌛` : `🌞`)}</span>
            <Switcher checked={dark} onChange={setDark} className="mr-3" />
        </div>
    );
};

export default ThemeSwitcher;
