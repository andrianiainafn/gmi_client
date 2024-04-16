"use client"
import React, {useEffect} from 'react';
import {IRole} from "@/app/dashboard/user/_services/definition";
import {useUserSectionStore} from "@/app/dashboard/user/state/user_state";

interface Props{
    role:IRole,
    HandleClickRole:(selectedId:string)=>void
}

const RoleSelectItem = (props:Props) => {
    const{role,HandleClickRole} = props
    const roleSelected = useUserSectionStore.use.selectedRole()
    return (
        <div onClick={()=>HandleClickRole(role.roleId)}
              className={`flex items-center text-sm space-x-2 bg-gray-300
                                            bg-opacity-30 hover:bg-teal-500 cursor-pointer
                                            hover:text-teal-500 hover:bg-opacity-30 py-1 px-3 rounded-full
                                            ${ roleSelected.includes(role.roleId) ? 'bg-teal-500 text-teal-500' : ''}
                                            `}>
            {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
            <p>
                {role.roleName}
            </p>
        </div>
    );
};

export default RoleSelectItem;