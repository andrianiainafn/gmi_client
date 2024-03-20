"use client"
import MaterialStatisticItem from "@/app/dashboard/_components/number_indicator/material_statistic_item";
import {useFetchMaterialStat} from "@/app/dashboard/_hooks/dashboard_hook";
import {IMaterialStatItem} from "@/app/dashboard/_services/definition";

export function MaterialStatisticContainer() {
    const {data,isSuccess,isLoading}=useFetchMaterialStat()
    return (
        <div className="flex space-x-3">
            {
                isSuccess && (
                    data.data.materialStats.map((elem:IMaterialStatItem,key:number)=>(
                        <MaterialStatisticItem key={key} total={data.data.materialNumber} label={elem.statName} number={elem.statNumber}/>
                    ))
                )
            }
        </div>
    );
}