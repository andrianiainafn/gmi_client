import React from 'react';
import {IMaterial} from "@/app/dashboard/material/_services/definition";

interface Props{
    HandleClickNewStatus:(materialStatusId:string)=>void,
    materialStatusName:string,
    actualStatus:string,
    materialStatusId:string,
    newStatus:string
}
const MaterialStatusForm = (props:Props) => {
    const {materialStatusId,materialStatusName,actualStatus,HandleClickNewStatus,newStatus}=props
    return (
        <>
            {
                materialStatusName !== actualStatus && (
                    <div onClick={()=>HandleClickNewStatus(materialStatusId)}
                         className={`flex items-center text-sm space-x-2 bg-gray-300
                                            bg-opacity-30 hover:bg-teal-500 cursor-pointer
                                            hover:text-teal-500 hover:bg-opacity-30 py-1 px-3 rounded-full
                                            ${materialStatusId === newStatus ? 'bg-teal-500 text-teal-500' : ''}
                                            `}>
                        <p>
                            {materialStatusName}
                        </p>
                    </div>
                )
            }
        </>
    );
};

export default MaterialStatusForm;