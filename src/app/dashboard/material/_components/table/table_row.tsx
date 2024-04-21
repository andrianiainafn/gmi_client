"use client"
import React, {useEffect} from 'react';
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import MaterialItem from "@/app/dashboard/material/_components/table/material_item";

const TableRow = () => {
    const material = useMaterialStore.use.material()
    useEffect(() => {
        console.log(material)
    }, [material]);
    return (
        <tbody className=" ">
            {
                material.map((elem:IMaterial,key:number)=>(
                    <MaterialItem key={key} rank={key} elem={elem}/>
                ))
            }
        </tbody>
    );
};

export default TableRow;