import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { UserContext } from "../Context";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./minors/ThemeSwitcher";
import axios from "axios";
import Env from "../Env";

const ProfileDropdown = () => {
    const [user, setUser, token, setToken] = useContext(UserContext);

    const logout = () => {
        axios
            .post(`${Env.api}/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(({ data }) => {
                setToken(null);
            })
            .catch(({ response }) => {
                console.log(response?.data);
            });
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center items-center w-full space-x-2 px-4 py-2 font-semibold text-white rounded-md hover:bg-opacity-30 hover:bg-black focus:outline-none">
                <img
                    src={user.picture}
                    alt=""
                    className="w-6 h-6 rounded-full "
                />
                <span>{user.username}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-0 origin-top-right bg-blue-50 dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${
                                        active
                                            ? "bg-indigo-500 text-white dark:bg-gray-800 dark:text-indigo-200"
                                            : "text-gray-900 dark:text-gray-100"
                                    } group flex space-x-2 rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                                    to="/profile"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>My Profile</span>
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={`${
                                        active
                                            ? "bg-green-500 text-white dark:bg-gray-800 dark:text-green-200"
                                            : "text-gray-900 dark:text-gray-100"
                                    } group flex space-x-2 rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                                    to="/account-settings"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span>Account settings</span>
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="p-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active
                                            ? "bg-red-500 text-white dark:bg-gray-800 dark:text-red-200"
                                            : "text-gray-900 dark:text-gray-100"
                                    } group flex space-x-2 rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                                    onClick={logout}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span>Logout</span>
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="p-1">
                        <Menu.Item>
                            {({ active }) => (
                                <div
                                    className={`${
                                        active
                                            ? "bg-blue-500 text-white dark:bg-gray-800"
                                            : "text-gray-900 dark:text-gray-100"
                                    } group flex flex-row space-x-2 rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>
                                    <span>Dark Mode</span>
                                    <ThemeSwitcher />
                                </div>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ProfileDropdown;
