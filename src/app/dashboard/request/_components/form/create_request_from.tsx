import React, {useEffect} from 'react';
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {useToast} from "@/components/ui/use-toast";
import {SubmitHandler, useForm} from "react-hook-form";
import {ToastAction} from "@/components/ui/toast";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";
import {useCreateRequest, useFetchPriority} from "@/app/dashboard/request/_hooks/request_hook";
import {IPriority} from "@/app/dashboard/request/_services/definition";
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import {useCreateNotification} from "@/app/dashboard/(notification)/_hooks/notification_hook";

interface IFormInput{
    name:string,
    description:string,
    statusId:string,
}
interface Props{
    HandleClickCancel:()=>void
}
const CreateRequestFrom = (props:Props) => {
    const request = useRequestStore.use.request()
    const {mutate:notificationMutate,isSuccess:isNotificationCreated}= useCreateNotification()
    const { toast } = useToast()
    const updateRequest  = useRequestStore.use.updateRequest()
    const {data,isLoading,isSuccess,isError} = useFetchPriority()
    const {mutate,data:requestData,isLoading:isCreateLoading,isSuccess:isCreateSuccess} = useCreateRequest()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        mutate(
            {
                materialName: data.name,
                priorityId: data.statusId,
                description:  data.description,
            }
        )
    }
    useEffect(()=>{
        if(isCreateSuccess){
            const updatedRequest = [requestData?.data,...request]
            updateRequest(updatedRequest)
            console.log(updatedRequest)
            notificationMutate(
                {
                    notificationType:"request",
                    accountConcerned:[""]
                }
            )
            toast({
                title: "Create request ",
                variant: "success",
                description: "Request posted successfully",
                action: (
                    <ToastAction altText="Goto request list to undo">Undo</ToastAction>
                ),
            })
        }
    },[isCreateSuccess])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5 space-y-2">
                <label htmlFor='name'>Name</label>
                <input type='text'  placeholder='Ex: Cable Rj45' {...register("name",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.name}/>
                <label htmlFor='statusId'>Priority</label>
                <select {...register("statusId",{required:true})} className="bg-transparent border px-2 py-3">
                    <option disabled selected value="">Choose an option</option>
                    {
                        isSuccess && (
                            <>
                                {
                                    data.data.map((elem:IPriority,key:number)=>(
                                        <option  key={key} value={elem.priorityId}>{elem.priorityDesignation}</option>
                                    ))
                                }
                            </>
                        )
                    }
                </select>
                <FieldEmptyAlert error={errors.statusId}/>
                <label htmlFor='description'>Description</label>
                <textarea   placeholder='Ex: Cable 2m red' {...register("description",{required:true})}
                            className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.description}/>
                <CreateButton label="Post request" isLoading={isCreateLoading}/>
                <CancelButton HandleClickCancel={props.HandleClickCancel}/>
            </div>
        </form>
    );
};

export default CreateRequestFrom;