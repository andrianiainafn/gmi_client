"use client"
import React, {useEffect, useState} from 'react';
import {useFetchRoleOfOrganization} from "@/app/dashboard/organization/_hooks/organization_hook";
import {useOrganizationStore} from "@/app/dashboard/organization/_state/organization_state";
import {CirclePlus} from "lucide-react";
import AddRoleForm from "@/app/dashboard/organization/_components/form/add_role_form";
interface Props {
    organizationId:string
}

const OrganizationElements = (props:Props) => {
    const {isSuccess,isLoading,data}= useFetchRoleOfOrganization(props.organizationId)
    const roles = useOrganizationStore.use.roles()
    const updateRoles = useOrganizationStore.use.updateRoles()
    const [isAddRole,setIsAddRole] = useState<boolean>(false)
    useEffect(() => {
        if(isSuccess){
            updateRoles(data.data)
        }
    }, [isLoading]);
    const HandleClickAddRole = ()=>{
        setIsAddRole(prevState => !prevState)
    }
    return (
        <div className="flex flex-col space-y-3">
            <h3 className="text-xl">The roles present in the organization</h3>
            <div className=" flex flex-col">
            {
                roles.length !== 0 && (
                    <div className=' flex items-center space-x-2'>
                        {
                            roles.map((role,key)=>(
                                <div key={key} className="bg-gray-300 px-3 py-1">
                                    <span className=" text-sm opacity-75">{role.roleName}</span>
                                </div>
                            ))
                        }
                        <>
                            {
                                isAddRole ? (
                                    <AddRoleForm organizationId={props.organizationId} HandleClickCancel={HandleClickAddRole}/>
                                ):(
                                    <button onClick={HandleClickAddRole} className="flex items-center text-white space-x-2 px-3 py-1 bg-teal-500 bg-opacity-90 ">
                                        <CirclePlus size={16} />
                                        <span className=" ">Add new role</span>
                                    </button>
                                )
                            }
                        </>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default OrganizationElements;