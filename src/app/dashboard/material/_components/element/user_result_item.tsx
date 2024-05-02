import React from 'react';
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {materialService} from "@/app/dashboard/material/_services/materail_serivce";
import {IAccount} from "@/app/dashboard/user/_services/definition";

interface Props{
    account:IAccount
}
const UserResultItem = (props:Props) => {
    const{account} = props
    const updateMaterialOwners  = useMaterialStore.use.updateMaterialOwners()
    const materialOwners = useMaterialStore.use.materialOwners()
    const HandleClickAdd = ()=>{
        console.log(materialOwners)
        const newMaterialOwners = materialService.toggleOwner(materialOwners,account)
        updateMaterialOwners([...newMaterialOwners])
        console.log(materialOwners)
    }
    return (
        <div className="flex items-center justify-between">
            <UserWrapper profileUrl={account.profileUrl} firstname={account.firstname} role={account.roles[0].roleName} providerType={account.providerType}/>
            <Button variant="secondary" className="space-x-2" onClick={HandleClickAdd}>
                <span>Add</span>
                <CirclePlus size={16} />
            </Button>
        </div>
    );
};

export default UserResultItem;