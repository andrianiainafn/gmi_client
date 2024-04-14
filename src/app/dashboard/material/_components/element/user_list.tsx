"use client"
import React, {useState} from 'react';
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {Button} from "@/components/ui/button";
import {Pencil} from "lucide-react";
import ChangeOwnerModal from "@/app/dashboard/material/_components/modal/change_owner_modal";
import {IAccount} from "@/app/dashboard/user/_services/definition";

interface Props{
    owners:IAccount[]
}

const UserList = (props:Props) => {
    const {owners}=props
    const [isEditOwner,setIsEditOwner] = useState<boolean>(false)
    const HandleClickEditOwner= ()=>{
        setIsEditOwner(prev=>!prev)
    }
    return (
            <>
                {
                    isEditOwner && (
                        <ChangeOwnerModal HandleClickChange={HandleClickEditOwner} owners={owners}/>
                    )
                }
                <div className="flex flex-row  mb-10 w-full">
                    {
                        owners.length === 0 ?(
                            <p>
                                No owner for this material
                            </p>
                        ):(
                            <AnimatedTooltip items={owners}  isList={false}/>
                        )
                    }
                    <div onClick={HandleClickEditOwner} className=" flex w-[7vw] h-[5vh] cursor-pointer justify-center bg-gray-200  rounded-lg items-center space-x-2" >
                                <span>
                                    Edit
                                </span>
                        <Pencil size={16} />
                    </div>
                </div>
            </>
    );
};

export default UserList;