"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useFetchAllMaterial} from "@/app/dashboard/material/_hooks/material_hook";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {useSearchParams} from "next/navigation";

interface Props{
    statusName:string
    filter:string | null
    page:string | null
}
const TabItem = (props:Props) => {
    const {filter,statusName,page}=props
    const filterParam = useSearchParams()
    const param = filterParam.get('filter')
    const {refetch,data,isSuccess,isLoading} = useFetchAllMaterial(statusName,Number(page),5)
    const updateMaterial = useMaterialStore(state => state.updateMaterial)
    const [isRefetch ,setIsRefetch] = useState(false)
    const HandleClickRefetch = async()=> {
        await refetch()
        setIsRefetch(prevState => !prevState)
    }
    useEffect(() => {
        if (isSuccess){
            updateMaterial(data.data)
        }
    }, [isSuccess,page,param,isRefetch]);
    return (
            < Link href={`/dashboard/material?filter=${statusName}&page=${page}`} onClick={HandleClickRefetch} className={`${filter === `${statusName}` ? 'text-black bg-white px-2 py-1 rounded-lg cursor-pointer' : "text-gray-500 px-2 py-1 cursor-pointer"}  `} >
                {statusName}
            </Link>
    );
};

export default TabItem;