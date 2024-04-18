import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {CircleX, Pencil} from "lucide-react";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import EditMaterialModal from "@/app/dashboard/material/_components/modal/edit_material_modal";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {formatDate} from "@/app/_common/util";
import {IDepartment} from "@/app/dashboard/department/_services/definition";
import EditDepartmentModal from "@/app/dashboard/department/_components/modal/edit_department_modal";

interface Props{
    rank:number,
    elem:IDepartment
}


const DepartmentItem = (props:Props) => {
    const{rank,elem}=props
    const [isEdit,setIsEdit] = useState<boolean>(false)
    const HandleClickEdit = ()=>{
        setIsEdit(prev=>!prev)
    }
    return (
        <>
            {
                isEdit && (
                    <EditDepartmentModal department={elem} HandleClickEdit={HandleClickEdit}/>
                )
            }
            <tr  className={`${(rank + 1 ) % 2 === 0 ? "bg-gray-100 dark:bg-gray-950" : ""} py-4 text-center font-light text-sm text-gray-600`}>
                <td>
                    {elem.departmentName}
                </td>

                <td>
                    {elem.departmentName}
                </td>
                <td>
                    {
                        elem.accounts.length !== 0 ? (
                            <div className="flex flex-row  justify-center w-full">
                                <AnimatedTooltip items={elem.accounts} isList={true}/>
                            </div>
                        ):(
                            <>
                                no account associated
                            </>
                        )
                    }
                </td>
                <td className="text-black">
                    {
                        elem.createdAt !== null ? (
                            <>
                                {formatDate(elem.createdAt!)}
                            </>
                        ):(
                            <>

                            </>
                        )
                    }
                </td>
                <td className="flex space-x-2 items-center justify-center">
                    <Button onClick={HandleClickEdit} variant="secondary" className=" flex w-[7vw] items-center space-x-2" >
                                <span>
                                    Edit
                                </span>
                        <Pencil size={16} />
                    </Button>
                    <Button variant="destructive" className="flex items-center space-x-2 w-[7vw]">
                                <span>
                                    Delete
                                </span>
                        <CircleX size={16} />
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default DepartmentItem;