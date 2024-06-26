"use client"
import React, {useEffect, useState} from 'react';
import { useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
import {IMaterialStatus} from "@/app/dashboard/material/_services/definition";
import {Filter} from "lucide-react";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import TabItem from "@/app/dashboard/material/_components/tab/tab_item";

const DepartmentTabFilter = () => {
    const{data,isLoading,isSuccess}=useFetchAllStatus()
    const[status,setStatus] = useState<IMaterialStatus[]>([])
    const filterParam = useSearchParams()
    const page = filterParam.get('page')
    const filter = filterParam.get('filter')
    useEffect(() => {
        if(isSuccess){
            setStatus([{
                materialStatusId:   '1',
                materialStatusName: 'All',
                createdAt:          new Date(),
                updatedAt:          new Date(),
            },...data.data])
        }
    }, [isSuccess]);
    return (
        <div className="flex items-center justify-between">
            {
                isSuccess && (
                    <div className='flex bg-gray-100 px-3 py-1 space-x-5  dark:bg-gray-900 items-center'>
                        {
                            status.map((elem:IMaterialStatus,key:number)=>(
                                <TabItem statusName={elem.materialStatusName} filter={filter} key={key} page={page}/>
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

export default DepartmentTabFilter;