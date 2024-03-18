"use client"
import React from 'react';
import { useTheme } from "next-themes";
import ThemeToggle from "@/app/_common/components/theme_toggle";

const SwitchTheme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <ThemeToggle theme={theme ? theme : "dark"} setMode={() => setTheme(theme == "dark" ? "light" : "dark")} />
            {/*{theme == "dark" ? <p className="ml-[10px] leading-none">Dark mode</p> : <p className="ml-[10px] leading-none">Light mode</p>}*/}
        </>
    );
};

export default SwitchTheme;