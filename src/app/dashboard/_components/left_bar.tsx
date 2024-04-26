import React from 'react';
import SwitchTheme from "@/app/_common/components/switch_theme";
import LinksContainer from "@/app/_common/components/links_container";

const LeftBar = () => {
    return (
        <div className=" w-[14%] bg-gray-100 dark:bg-gray-950  fixed h-screen py-2 px-3 space-y-6 ">
            <p className="text-3xl sm:text-3xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
                GmI
            </p>
            <LinksContainer/>
            <div className="absolute bottom-5 left-2 w-full space-y-2">
                <SwitchTheme/>
            </div>
        </div>
    );
};

export default LeftBar;