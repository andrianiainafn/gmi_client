import React, {useEffect} from 'react';
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateRole} from "@/app/dashboard/organization/_hooks/organization_hook";
import {toast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {useOrganizationStore} from "@/app/dashboard/organization/_state/organization_state";


interface IFormInput{
    roleName:string,
}

interface Props{
    organizationId: string
    HandleClickCancel:()=>void
}
const AddRoleForm = (props:Props) => {
    const roles = useOrganizationStore.use.roles()
    const updateRoles = useOrganizationStore.use.updateRoles()
    const {isLoading,mutate,data,isSuccess}= useCreateRole(props.organizationId)
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        mutate(data.roleName)
    }
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<IFormInput>()
    useEffect(()=>{
        if(isSuccess){
        updateRoles([data.data,...roles])
            toast({
                title: "Create material ",
                description: "Material has been created successfully",
                variant: "success",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        }
    },[isSuccess])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full  items-center space-x-2">
                <input type='text'  placeholder='Ex: Admin' {...register("roleName",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.roleName}/>
                <CreateButton label="Add role" isLoading={isLoading}/>
                <CancelButton HandleClickCancel={props.HandleClickCancel}/>
            </div>
        </form>
    );
};

export default AddRoleForm;