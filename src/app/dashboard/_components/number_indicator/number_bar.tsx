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
                ...prevState,
                { name: '/approved', value: data.data.approved },
                { name: '/pending', value:data.data.pending },
                { name: '/rejected', value: data.data.rejected },
            ]);
        }
    }, [isSuccess]);
    return (
        <>
            <BarList data={dataRequest} color="teal-500" className="w-full" />
        </>
    )
}
