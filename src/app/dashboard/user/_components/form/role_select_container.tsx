"use client"
import React from 'react';
import {IRole} from "@/app/dashboard/user/_services/definition";
import RoleSelectItem from "@/app/dashboard/user/_components/form/role_select_item";

interface Props{
    roles:IRole[],
    HandleClickRole:(selectedId:string)=>void
}

const RoleSelectContainer = (props:Props) => {
    const {roles,HandleClickRole} = props
    return (
        <div className="flex items-center space-x-2">
            {
                roles.map((role,key)=>(
                    <RoleSelectItem key={key}  role={role} HandleClickRole={HandleClickRole}/>
                ))
            }
        </div>
    );
};

export default RoleSelectContainer;