import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
    return (
        <Fragment>
            <div className="w-full bg-blue-800 dark:bg-gray-900 shadow-lg fixed">
                <div className="container mx-auto flex justify-between items-center py-2">
                    <div>
                        <Link
                            to="/"
                            className="text-lg text-blue-100 font-bold"
                        >
                            SmartLolo Social
                        </Link>
                    </div>
                    <div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                autoComplete="off"
                                className="search"
                                placeholder="Search... 🔎"
                            />
                        </form>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <ProfileDropdown />
                    </div>
                </div>
            </div>
            <div className="h-16"></div>
        </Fragment>
    );
};

export default Navbar;
