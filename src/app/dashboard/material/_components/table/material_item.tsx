import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {CircleX, Pencil} from "lucide-react";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import EditMaterialModal from "@/app/dashboard/material/_components/modal/edit_material_modal";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {formatDate} from "@/app/_common/util";
import DeleteDialogue from "@/app/dashboard/material/_components/modal/delete_dialoge";

interface Props{
    rank:number,
    elem:IMaterial
}


const MaterialItem = (props:Props) => {
    const{rank,elem}=props
    const [isEdit,setIsEdit] = useState<boolean>(false)
    const [isDelete,setIsDelete]= useState<boolean>(false)
    const HandleClickEdit = ()=>{
        setIsEdit(prev=>!prev)
    }
    const HandleClickDelete = ()=>{
        setIsDelete(prevState => !prevState)
    }
    return (
        <>
            {
                isEdit && (
                    <EditMaterialModal HandleClickCreate={HandleClickEdit} material={elem}/>
                )
            }
            <tr  className={`${(rank + 1 ) % 2 === 0 ? "bg-gray-100 dark:bg-gray-950" : ""} py-4 text-center font-light text-sm text-gray-600`}>
                <td>
                    {elem.materialName}
                </td>
                <td >
                    {elem.serialNumber}
                </td>
                {
                    elem.actualStatus === "Under maintenance" && (
                        <td >
                                    <span className="whitespace-nowrap  bg-blue-400 bg-opacity-30 text-blue-500 py-1 px-3 rounded-lg ">
                                        {elem.actualStatus}
                                    </span>
                        </td>
                    )
                }
                {
                    elem.actualStatus === "In service" && (
                        <td >
                                    <span className=" whitespace-nowrap bg-teal-500 bg-opacity-30 text-teal-700 py-1 px-3 rounded-lg">
                                        {elem.actualStatus}
                                    </span>
                        </td>
                    )
                }
                {
                    elem.actualStatus === "Out of service" && (
                        <td >
                                    <span className=" whitespace-nowrap bg-red-500 bg-opacity-30 text-red-600 py-1 px-3 rounded-lg">
                                        {elem.actualStatus}
                                    </span>
                        </td>
                    )
                }
                <td>
                    {elem.description}
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
                <td className="flex space-x-2 items-center">
                    <Button onClick={HandleClickEdit} variant="secondary" className=" flex w-[7vw] items-center space-x-2" >
                                <span>
                                    Edit
                                </span>
                        <Pencil size={16} />
                    </Button>
                    <Button onClick={HandleClickDelete} variant="destructive" className="flex items-center space-x-2 w-[7vw]">
                                <span>
                                    Delete
                                </span>
                        <CircleX size={16} />
                    </Button>
                </td>
            </tr>
            {
                isDelete && (
                    <DeleteDialogue HandleClickCancel={HandleClickDelete} material={elem}/>
                )
            }
        </>
    );
};

export default MaterialItem;