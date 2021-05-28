import { Link } from "react-router-dom";
import ThemeSwitcher from "./minors/ThemeSwitcher";

const Navbar = ({ login, register }) => (
    <div className="w-full">
        <div className="w-full my-0 bg-blue-500 dark:bg-indigo-800">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h2 className="font-bold text-xl text-white">
                    <Link to="/">SmartLolo Social</Link>
                </h2>
                <div className="flex space-x-3 items-center">
                    <ThemeSwitcher />
                    {login && (
                        <Link
                            to="/login"
                            className="font-semibold text-blue-50 "
                        >
                            Login
                        </Link>
                    )}
                    {/* {login && register && (
                            <div className=" w-0.5 bg-white rounded-md"></div>
                        )} */}
                    {register && (
                        <Link
                            to="/register"
                            className="font-semibold text-white px-3 py-1 bg-green-600 hover:bg-green-700 rounded"
                        >
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 fill-current text-blue-500 dark:text-indigo-800"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,160C420,139,480,149,540,154.7C600,160,660,160,720,181.3C780,203,840,245,900,250.7C960,256,1020,224,1080,197.3C1140,171,1200,149,1260,165.3C1320,181,1380,235,1410,261.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
    </div>
);

export default Navbar;
