'use client'
import React, {useEffect, useState} from 'react';
import {IMaterialStatus} from "@/app/dashboard/material/_services/definition";
import TabItem from "@/app/dashboard/material/_components/tab/tab_item";
import {Filter} from "lucide-react";
import {useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
import {useSearchParams} from "next/navigation";
import TabItemRequest from "@/app/dashboard/request/_components/tab/tab_item_request";
import {useFetchPriority} from "@/app/dashboard/request/_hooks/request_hook";
import {IPriority} from "@/app/dashboard/request/_services/definition";

const RequestTabFilter = () => {
    const{data,isSuccess}=useFetchPriority()
    const[priority,setPriority] = useState<IPriority[]>([])
    const filterParam = useSearchParams()
    const filter = filterParam.get('filter')
    useEffect(() => {
        if(isSuccess){
            setPriority([{
                priorityId:'1',
                priorityDesignation:'All',
                request:[]
            },...data.data])
        }
    }, [isSuccess]);
    return (
        <div className="flex items-center justify-between">
            {
                isSuccess && (
                    <div className='flex bg-gray-100 px-3 py-1 space-x-5  dark:bg-gray-900 items-center'>
                        {
                            priority.map((elem:IPriority,key:number)=>(
                                <TabItemRequest statusName={elem.priorityDesignation} filter={filter} key={key}/>
                            ))
                        }
                    </div>
                )
            }
            <button className="flex items-center space-x-2 bg-gray-100 text-gray-500 py-1 px-3">
                <Filter />
                <span>Filters</span>
            </button>
        </div>
    );
};

export default RequestTabFilter;