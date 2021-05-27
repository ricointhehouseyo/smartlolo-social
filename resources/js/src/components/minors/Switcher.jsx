import { Switch } from "@headlessui/react";

const Switcher = ({ checked, onChange, className }) => (
    <Switch
        checked={checked}
        onChange={onChange}
        className={`${
            checked ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11 transition duration-300 focus:outline-none ${className}`}
    >
        <span
            className={`${
                checked
                    ? "translate-x-6"
                    : "translate-x-1 border border-blue-300"
            } inline-block w-4 h-4 transform bg-white rounded-full transition duration-300`}
        />
    </Switch>
);

export default Switcher;
