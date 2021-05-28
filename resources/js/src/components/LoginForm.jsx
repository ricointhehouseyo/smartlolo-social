import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Env from "../Env";
import { UserContext } from "../Context";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);

    const [user, setUser, token, setToken] = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setProcessing(true);
        axios
            .post(`${Env.api}/login`, { email, password })
            .then(({ data }) => {
                console.log(data);
                setToken(data.token);
                setUser(data.user);
                window.location = Env.host;
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.data.errors) {
                        setError(err.response.data.errors);
                    } else {
                        setError(err.response.data);
                    }
                }
                console.error(err);
            })
            .finally(() => setProcessing(false));
    };

    return (
        <div className="bg-white rounded-lg py-4 px-6 shadow-xl transition duration-300 w-96 space-y-3 dark:bg-gray-700">
            <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-900 text-lg dark:text-blue-100">
                    Login
                </h4>
                <div className="text-black dark:text-white">
                    or{` `}
                    <Link to="/register" className="link">
                        create an account.
                    </Link>
                </div>
            </div>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
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
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
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
                {error.message && (
                    <small className="text-sm text-red-500 dark:text-red-300 ml-2">
                        {error.message}
                    </small>
                )}
                <button
                    className={processing ? `btn-disabled` : `btn`}
                    disabled={processing}
                    type="submit"
                >
                    {processing ? `Loggening in...` : `Login`}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
