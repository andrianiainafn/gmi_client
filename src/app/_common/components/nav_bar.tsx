"use client"
import React from 'react';
import Link from "next/link";
import SwitchTheme from "@/app/_common/components/switch_theme";



const NavBar = () => {
    return (
        <div className="flex justify-between items-center px-6 z-20">
            <p className="text-4xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                GmI
            </p>
            <div className="text-2xl flex items-center space-x-6">
                <Link href="" >
                    why gmi
                </Link>
                <Link href="" >
                    Features
                </Link>
                <Link href="" >
                    Contact us
                </Link>
                <Link href="" >
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