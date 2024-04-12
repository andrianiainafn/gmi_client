import React, {useEffect, useState} from 'react';
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {useFetchRequest} from "@/app/dashboard/request/_hooks/request_hook";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";

interface Props{
    priorityDesignation:string
    filter:string | null
}
const TabItemRequest = (props:Props) => {
    const {filter,priorityDesignation}=props
    const filterParam = useSearchParams()
    const param = filterParam.get('priority')
    const {refetch,data,isSuccess,isLoading} = useFetchRequest(priorityDesignation,0,5)
    const updateRequest = useRequestStore(state => state.updateRequest)
    const [isRefetch ,setIsRefetch] = useState(false)
    const HandleClickRefetch = async()=> {
        await refetch()
        setIsRefetch(prevState => !prevState)
    }
    useEffect(() => {
        if (isSuccess){
            updateRequest(data.data)
        }
    }, [isSuccess,param,isRefetch]);
    return (
        < Link href={`/dashboard/request?priority=${priorityDesignation}&page=0`} onClick={HandleClickRefetch} className={`${filter === `${priorityDesignation}` ? 'text-black bg-white px-2 py-1 rounded-lg cursor-pointer' : "text-gray-500 px-2 py-1 cursor-pointer"}  `} >
            {priorityDesignation}
        </Link>
    );
};

export default TabItemRequest;