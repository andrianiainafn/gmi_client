"use client"
import React from 'react';
import Link from "next/link";
import {ILink} from "@/app/_common/constant/navlink";
import {usePathname} from "next/navigation";

const LinkItem = (props:ILink) => {
    const pathname = usePathname()
    const isActive = pathname === props.href
    return (
        <Link href={props.href} className={`${isActive ? "text-teal-500 dark:text-teal-500": ""}  flex space-x-3 items-center text-xl dark:text-white dark:hover:text-teal-500 text-gray-800 font-light hover:text-teal-500 `}>
            {
                props.icon
            }
            <span>{props.label}</span>
        </Link>
    );
};

export default LinkItem;