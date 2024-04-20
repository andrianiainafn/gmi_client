import React from 'react';
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {CirclePlus} from "lucide-react";
import {materialService} from "@/app/dashboard/material/_services/materail_serivce";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import {useDepartmentStore} from "@/app/dashboard/department/state/department_state";

interface Props{
    account:IAccount
}
const UserResultItem = (props:Props) => {
    const{account} = props
    const updateMember  = useDepartmentStore.use.updateMember()
    const member = useDepartmentStore.use.members()
    const HandleClickAdd = ()=>{
        console.log(member)
        const newMember = materialService.toggleOwner(member,account)
        updateMember([...newMember])
        console.log(member)
    }
    return (
        <div className="flex items-center justify-between">
            <UserWrapper profileUrl={account.profileUrl} firstname={account.firstname} role={account.roles[0].roleName}/>
            <div  className="space-x-2 bg-gray-200 cursor-pointer p-2 flex rounded-lg" onClick={HandleClickAdd}>
                <CirclePlus size={16} />
                <span>Add</span>
            </div>
        </div>
    );
};

export default UserResultItem;