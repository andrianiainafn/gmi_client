"use client"
import React from 'react';
import Link from "next/link";
import SwitchTheme from "@/app/_common/components/switch_theme";



const NavBar = () => {
    return (
        <div className=" fixed flex justify-between w-full h-[10vh] top-0 mb-10 items-center px-6 z-20 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 dark:border-gray-900">
            <p className=" text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                GmI
            </p>
            <div className="text-2xl flex items-center space-x-6 ">
                <Link href="#why" className="link-nav" >
                    why gmi ?
                </Link>
                <Link href="#feature" className="link-nav">
                    Features
                </Link>
                <Link href="#contact" className="link-nav">
                    Contact us
                </Link>
                <Link href="#about" className="link-nav">
                    About us
                </Link>
            </div>
            <div className="flex items-center space-x-3 z-20">
                <Link href="/api/auth/signin" className="" >
                    <button className="px-8 h-10  rounded-md  transition duration-200 bg-white text-black border-[1px] border-black hover:bg-opacity-35 hover:bg-gray-300">
                            Log In
                    </button>
                </Link>
                <Link href="/api/auth/signin" >
                    <button className="px-8 h-10  rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                            Sign up
                    </button>
                </Link>
                <div>
                    <SwitchTheme/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;