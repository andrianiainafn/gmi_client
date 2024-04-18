"use client"
import React, {useEffect} from 'react';
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import MaterialItem from "@/app/dashboard/material/_components/table/material_item";
import DepartmentItem from "@/app/dashboard/department/_components/table/department_item";
import {IDepartment} from "@/app/dashboard/department/_services/definition";
import {useDepartmentStore} from "@/app/dashboard/department/state/department_state";
import {useFetchDepartments} from "@/app/dashboard/department/_hooks/department_hook";

const TableRow = () => {
    const departments = useDepartmentStore.use.departments()
    const updateDepartments = useDepartmentStore.use.updateDepartments()
    const {data,isSuccess} = useFetchDepartments()
    useEffect(() => {
        if (isSuccess){
            updateDepartments([...data.data])
        }
    }, [isSuccess]);
    return (
        <tbody className=" ">
            {
                departments.map((elem:IDepartment,key:number)=>(
                    <DepartmentItem key={key} rank={key} elem={elem}/>
                ))
            }
        </tbody>
    );
};

export default TableRow;