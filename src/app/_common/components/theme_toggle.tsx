'use client'
import React from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

interface ThemeToggleProps {
    theme: string;
    setMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setMode }) => {

    return (
        <div
            className="relative w-20 h-10 flex items-center
            dark:bg-teal-500 bg-gray-900 cursor-pointer
            rounded-full p-1"
            onClick={setMode}
        >
            <FaMoon className="text-white" size={18} />
            <div
                className={`absolute bg-white
                dark:bg-medium w-6 h-6 rounded-full shadow-md
                 transform transition-transform duration-300 ${theme == "dark" ? "left-[2px]" : "right-[2px]"}`}
            ></div>
            <BsSunFill
                className="ml-auto text-yellow-400"
                size={18}
            />
        </div>
    )
};

export default ThemeToggle;