import React, {useEffect} from 'react';
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useUpdateOrganizationName} from "@/app/dashboard/organization/_hooks/organization_hook";
import {toast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {useOrganizationStore} from "@/app/dashboard/organization/_state/organization_state";

interface IFormInput{
    name:string,
}

interface Props{
    organizationId:string
    HandleClickCancel:()=>void
    organizationName:string
}

const EditNameForm = (props:Props) => {
    const organizations = useOrganizationStore.use.organizations()
    const updateOrganizations = useOrganizationStore.use.updateOrganization()
    const {isLoading,data,isSuccess,mutate}= useUpdateOrganizationName(props.organizationId)
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        mutate(data.name)
    }
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<IFormInput>({
        defaultValues:{
            name:props.organizationName
        }
    })
    useEffect(()=>{
        if(isSuccess){
            const index = organizations.findIndex(objet => objet.organizationId === props.organizationId);
            organizations.splice(index, 1);
            organizations.splice(index, 0, data.data);
            updateOrganizations([...organizations])
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
            <div className="flex space-x-2 w-full  items-center ">
                <input type='text'  placeholder='roleName' {...register("name",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.name}/>
                <CreateButton label="Conrfirm" isLoading={isLoading}/>
                <CancelButton HandleClickCancel={props.HandleClickCancel}/>
            </div>
        </form>
    );
};

export default EditNameForm;