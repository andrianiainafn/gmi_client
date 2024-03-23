"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useFetchAllMaterial, useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {usePathname, useSearchParams} from "next/navigation";
interface Props{
    statusName:string
    filter:string | null
}
const TabItem = (props:Props) => {
    const {filter,statusName}=props
    const filterParam = useSearchParams()
    const param = filterParam.get('filter')
    const {refetch,data,isSuccess,isLoading} = useFetchAllMaterial(statusName,0,20)
    const updateMaterial = useMaterialStore(state => state.updateMaterial)
    const [isRefetch,setIsRefetch] = useState<boolean>(false)
    const HandleClickRefetch = ()=>{
        refetch()
        setIsRefetch(prev=>!prev)
    }
    useEffect(() => {
        if (isSuccess){
            updateMaterial(data.data)

        }
    }, [isSuccess,isRefetch,param]);
    return (

        <Link onClick={HandleClickRefetch} href={`/dashboard/material?filter=${statusName}`}
               className={`${filter === `${statusName}` ? 'text-black bg-white px-2 py-1 rounded-lg cursor-pointer' : "text-gray-500 px-2 py-1 cursor-pointer"}  `} >
            <p >
                {statusName}
            </p>
        </Link>
    );
};

export default TabItem;