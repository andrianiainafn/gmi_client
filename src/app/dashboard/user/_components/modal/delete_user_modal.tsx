"use client"
import React, {useEffect} from 'react';
import {useDeleteUser} from "@/app/dashboard/user/_hooks/user_hook";
import {useUserSectionStore} from "@/app/dashboard/user/state/user_state";
import {Button} from "@/components/ui/button";
import {ToastAction} from "@/components/ui/toast";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import {useToast} from "@/components/ui/use-toast";

interface Props{
    HandleClickCancel:()=>void
    user:IAccount
}

const DeleteUserModal = (props:Props) => {
    const {HandleClickCancel,user} = props
    const users = useUserSectionStore.use.users()
    const updateUsers = useUserSectionStore.use.updateUsers()
    const { toast } = useToast()
    const{mutate,isLoading,isSuccess} = useDeleteUser()
    useEffect(() => {
        if (isSuccess){
            const index = users.findIndex(objet => objet.accountId === user.accountId);
            users.splice(index, 1);
            updateUsers([...users])
            toast({
                title: "Delete material ",
                description: "Material has been deleted successfully",
                variant: "success",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        }

    }, [isSuccess]);
    const HandleClickContinue = ()=>{
        mutate(user.accountId)
    }
    return (
        <div className="overlay" >
            <div className="central flex flex-col space-y-4 p-4" onClick={(e)=>e.stopPropagation()}>
                <h3 className="font-bold text-[1.2em]">
                    Are you absolutely sure ?
                </h3>
                <p className=" opacity-70 text-[0.9em]">
                    This action cannot be undone. This will permanently delete this account and remove your data from our servers.
                </p>
                <div className="flex justify-end space-x-2 items-center">
                    <Button variant="secondary" onClick={HandleClickCancel}>
                        Cancel
                    </Button>
                    <Button variant="default" onClick={HandleClickContinue}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteUserModal;