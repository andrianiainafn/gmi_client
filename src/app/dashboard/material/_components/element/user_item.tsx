import React from 'react';
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {CircleX} from "lucide-react";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {materialService} from "@/app/dashboard/material/_services/materail_serivce";


interface Props{
    user:IAccount
}
const UserItem = (props:Props) => {
    const{user}=props
    const updateMaterialOwners  = useMaterialStore.use.updateMaterialOwners()
    const materialOwners = useMaterialStore.use.materialOwners()
    const HandleClickAdd = ()=>{
        const newMaterialOwners = materialService.toggleOwner(materialOwners,user)
        updateMaterialOwners([...newMaterialOwners])
    }
    return (
        <div className="flex items-center relative text-sm space-x-2  bg-gray-300 bg-opacity-30  py-1 px-4 rounded-full">
            <UserWrapper profileUrl={user.profileUrl} firstname={`${user.firstname} ${user.lastname}`} role={user.roles[0].roleName} providerType={user.providerType}/>
            <button  className="" onClick={HandleClickAdd} >
                <CircleX size={18} />
            </button>
        </div>
    );
};

export default UserItem;