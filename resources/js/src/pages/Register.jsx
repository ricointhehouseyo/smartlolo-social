import { Fragment } from "react";
//components
import RootFragment from "../RootFragment";
import Navbar from "../components/NavbarGuest";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

const Register = () => {
    return (
        <RootFragment className="w-full min-h-full dark:bg-gray-900">
            <Navbar login={true} register={false} />
            <div className="flex flex-col items-center my-5 space-y-5">
                <h1 className="text-2xl text-gray-900 dark:text-blue-50 font-bold">
                    SmartLolo Social Logo
                </h1>
                <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="w-96 flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-blue-100">
                            Hey!
                        </h1>
                        <p className="text-black dark:text-white text-lg font-semibold">
                            Wanna try SmartLolo Social?
                        </p>
                    </div>
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </RootFragment>
    );
};

export default Register;
