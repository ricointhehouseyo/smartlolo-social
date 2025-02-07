import { Fragment } from "react";
//components
import RootFragment from "../RootFragment";
import Navbar from "../components/NavbarGuest";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

const Login = () => {
    return (
        <RootFragment className="w-full min-h-full dark:bg-gray-900">
            <Navbar login={false} register={true} />
            <div className="flex flex-col items-center my-5 space-y-5">
                <h1 className="text-2xl text-gray-900 dark:text-blue-50 font-bold">
                    SmartLolo Social Logo
                </h1>
                <LoginForm />
            </div>
            <Footer />
        </RootFragment>
    );
};

export default Login;
