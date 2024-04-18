"use client"
import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
import CreateMaterialModal from "@/app/dashboard/material/_components/modal/create_material_modal";
import CreateDepartmentModal from "@/app/dashboard/department/_components/modal/create_department_modal";

const CreateDepartmentButton = () => {
    const [isCreate,setIsCreate] = useState<boolean>(false)
    const HandleCLickIsCreate = ()=>{
        setIsCreate(prev=>!prev)
    }
    return (
        <>
            {
                isCreate && (
                    <CreateDepartmentModal HandleClickCreate={HandleCLickIsCreate} />
                )
            }
            <div className="flex justify-end">
                <Button onClick={HandleCLickIsCreate} variant="secondary" className="flex items-center space-x-2 py-2" >
                    <span>Add new department</span>
                    <CirclePlus size={16} />
                </Button>
            </div>
        </>
    );
};

export default CreateDepartmentButton;