import React from 'react';
import {ILink, links} from "@/app/_common/constant/navlink";
import LinkItem from "@/app/dashboard/_components/link_item";
import SwitchTheme from "@/app/_common/components/switch_theme";

const LeftBar = () => {
    return (
        <div className=" w-[14%] bg-gray-100 dark:bg-gray-950  h-screen py-2 relative px-3 space-y-6 ">
            <p className="text-3xl sm:text-3xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
                GmI
            </p>
            <div className="flex flex-col space-y-4  ">
                {links.map((elem:ILink,key:number)=>(
                    <LinkItem key={key} label={elem.label} icon={elem.icon} href={elem.href}/>
                ))
                }
            </div>
            <div className="absolute bottom-5 left-2 w-full space-y-2">
                <SwitchTheme/>
            </div>
        </div>
    );
};

export default LeftBar;