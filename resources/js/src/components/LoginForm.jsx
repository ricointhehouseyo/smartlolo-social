import { Link } from "react-router-dom";

const LoginForm = () => {
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
            <form
                className="flex flex-col space-y-3"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
                <button className="btn" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
