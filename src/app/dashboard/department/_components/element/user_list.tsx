"use client"
import React, {useState} from 'react';
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {Pencil} from "lucide-react";
import ChangeMemberModal from "@/app/dashboard/department/_components/modal/change_member_modal";
import {useDepartmentStore} from "@/app/dashboard/department/state/department_state";


const UserList = () => {
    const members = useDepartmentStore.use.members()
    const [isEditOwner,setIsEditOwner] = useState<boolean>(false)
    const HandleClickAddMember= ()=>{
        setIsEditOwner(prev=>!prev)
    }
    return (
            <>
                {
                    isEditOwner && (
                        <ChangeMemberModal HandleClickChange={HandleClickAddMember} />
                    )
                }
                <div className="flex flex-row  mb-10 w-full space-x-2">
                    {
                        members.length === 0 ?(
                            <p>
                                No member selected for this department
                            </p>
                        ):(
                            <AnimatedTooltip items={members}  isList={false}/>
                        )
                    }
                    <div onClick={HandleClickAddMember} className=" flex  p-2  cursor-pointer justify-center bg-gray-200  rounded-lg items-center space-x-2" >
                                <span>
                                    Add members
                                </span>
                        <Pencil size={16} />
                    </div>
                </div>
            </>
    );
};

export default UserList;