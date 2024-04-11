import React, {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import {useFetchAllMaterial} from "@/app/dashboard/material/_hooks/material_hook";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import Link from "next/link";

interface Props{
    statusName:string
    filter:string | null
}
const TabItemRequest = (props:Props) => {
    const {filter,statusName}=props
    const filterParam = useSearchParams()
    const param = filterParam.get('filter')
    const {refetch,data,isSuccess,isLoading} = useFetchAllMaterial(statusName,0,20)
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
    }, [isSuccess,param,isRefetch]);
    return (
        < Link href={`/dashboard/request?filter=${statusName}&page=0`} onClick={HandleClickRefetch} className={`${filter === `${statusName}` ? 'text-black bg-white px-2 py-1 rounded-lg cursor-pointer' : "text-gray-500 px-2 py-1 cursor-pointer"}  `} >
            {statusName}
        </Link>
    );
};

export default TabItemRequest;