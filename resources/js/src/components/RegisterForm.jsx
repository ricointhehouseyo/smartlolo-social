import { Link } from "react-router-dom";

const RegisterForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                <div className="flex flex-col space-y-2">
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
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
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
                    />
                </div>
                <div className="flex flex-col space-y-2">
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
                    />
                </div>
                <div className="flex flex-col space-y-2">
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
                    />
                </div>
                <div className="flex flex-row items-center mx-2 space-x-2">
                    <input type="checkbox" name="agree" id="agree" />
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
                <button className="btn" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
