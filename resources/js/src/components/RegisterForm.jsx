import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Env from "../Env";

const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (agree) {
            setProcessing(true);
            axios
                .post(`${Env.api}/register`, {
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                    password_confirmation: rePassword,
                })
                .then(() => {
                    alert("Account created! please login");
                    window.location = Env.host;
                })
                .catch((err) => {
                    if (err.response) {
                        if (err.response.data.errors) {
                            setError(err.response.data.errors);
                            console.error(err.response.data.errors);
                        } else {
                            setError(err.response.data);
                        }
                    }
                })
                .finally(() => setProcessing(false));
        } else {
            setError({ message: "Please check our terms and privacy policy!" });
        }
    };

    return (
        <div className="bg-white rounded-lg py-4 px-6 shadow-xl transition duration-300 space-y-3 dark:bg-gray-700">
            <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-900 text-lg dark:text-blue-100">
                    Register
                </h4>
                <div className="text-black dark:text-white">
                    or{` `}
                    <Link to="/login" className="link">
                        login.
                    </Link>
                </div>
            </div>
            <form
                className="flex flex-col space-y-3 py-3"
                onSubmit={handleSubmit}
            >
                {error.message && (
                    <div className="p-1 bg-red-100 border border-red-500 flex">
                        <small className="text-sm text-red-500 ml-2">
                            {error.message}
                        </small>
                    </div>
                )}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="first-name"
                        className="text-black dark:text-white mx-2"
                    >
                        Full Name
                    </label>
                    <div className="flex flex-row space-x-2">
                        <input
                            className="form-input"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    {error.first_name &&
                        error.first_name.map((err) => (
                            <small
                                className="text-sm text-red-500 dark:text-red-300 ml-2"
                                key={err}
                            >
                                {err}
                            </small>
                        ))}
                </div>
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="email"
                        className="text-black dark:text-white mx-2"
                    >
                        Email
                    </label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email here..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email &&
                        error.email.map((err) => (
                            <small
                                className="text-sm text-red-500 dark:text-red-300 ml-2"
                                key={err}
                            >
                                {err}
                            </small>
                        ))}
                </div>
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="password"
                        className="text-black dark:text-white mx-2"
                    >
                        Password
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password here..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.password &&
                        error.password.map((err) => (
                            <small
                                className="text-sm text-red-500 dark:text-red-300 ml-2"
                                key={err}
                            >
                                {err}
                            </small>
                        ))}
                </div>
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="re-password"
                        className="text-black dark:text-white mx-2"
                    >
                        Re-type Password
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="re-password"
                        id="re-password"
                        placeholder="Re-type your password here..."
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-row items-center mx-2 space-x-2">
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label
                        htmlFor="agree"
                        className="text-black dark:text-white"
                    >
                        I agree to the{` `}
                        <Link to="/privacy-policy" className="link">
                            terms and privacy policy
                        </Link>
                    </label>
                </div>
                <button
                    className={processing ? `btn-disabled` : `btn`}
                    disabled={processing}
                    type="submit"
                >
                    {processing ? `Signing you in...` : `Register`}
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
