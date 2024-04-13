import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {CircleX, Pencil} from "lucide-react";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import {formatDistanceToNow} from "date-fns";
import EditMaterialModal from "@/app/dashboard/material/_components/modal/edit_material_modal";

interface Props{
    rank:number,
    elem:IMaterial
}


const MaterialItem = (props:Props) => {
    const{rank,elem}=props
    const formatDate = (apiDate:Date) => {
        const distance = formatDistanceToNow(new Date(apiDate), { addSuffix: true, includeSeconds: true });
        const distanceWithoutAbout = distance.replace('about', '');
        return distanceWithoutAbout
    };
    const [isEdit,setIsEdit] = useState<boolean>(false)
    const HandleClickEdit = ()=>{
        setIsEdit(prev=>!prev)
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
                    elem.actualStatus === "Under Maintenance" && (
                        <td >
                                    <span className="  bg-blue-400 bg-opacity-30 text-blue-500 py-1 px-3 rounded-lg ">
                                        {elem.actualStatus}
                                    </span>
                        </td>
                    )
                }
                {
                    elem.actualStatus === "In service" && (
                        <td >
                                    <span className="bg-teal-500 bg-opacity-30 text-teal-700 py-1 px-3 rounded-lg">
                                        {elem.actualStatus}
                                    </span>
                        </td>
                    )
                }
                {
                    elem.actualStatus === "Out of service" && (
                        <td >
                                    <span className="bg-red-500 bg-opacity-30 text-red-600 py-1 px-3 rounded-lg">
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
                        elem.account ? (
                            <>
                                {elem.account}
                            </>
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

export default MaterialItem;