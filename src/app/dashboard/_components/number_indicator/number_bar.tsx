"use client"
import { BarList } from '@tremor/react';
import {useFetchRequestStat} from "@/app/dashboard/_hooks/dashboard_hook";
import {useEffect, useState} from "react";

interface IDataRequest{
    name:string,
    value:number
}

export const BarListHero = ()=>{
    const {data,isSuccess,isLoading} = useFetchRequestStat()
    const [dataRequest,setDataRequest] = useState<IDataRequest[]>([])
    useEffect(() => {
        if (isSuccess) {
            setDataRequest(prevState => [
                { name: '/pending', value:data.data.pending !== null ? data.data.pending : 0 },
                { name: '/approved', value: data.data.approved !== null ? data.data.approved : 0 },
                { name: '/rejected', value: data.data.rejected !== null ? data.data.rejected : 0  },
            ]);
        }
    }, [isSuccess]);
    return (
        <>
            <BarList data={dataRequest} color="teal-500" className="w-full" />
        </>
    )
}
