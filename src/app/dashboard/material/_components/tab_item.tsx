"use client"
import React from 'react';
import Link from "next/link";
import {useFetchAllMaterial, useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
interface Props{
    statusName:string
    filter:string | null
}
const TabItem = (props:Props) => {
    const {filter,statusName}=props
    const {} = useFetchAllMaterial(statusName,0,20)
    return (
        <Link href={`/dashboard/material?filter=${statusName}`}
               className={`${filter === `${statusName}` ? 'text-black bg-white px-2 py-1 rounded-lg cursor-pointer' : "text-gray-500 cursor-pointer"} `} >
            <p >
                {statusName}
            </p>
        </Link>
    );
};

export default TabItem;