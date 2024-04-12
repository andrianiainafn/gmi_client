import React, {useEffect} from 'react';
import {CircleAlert} from "lucide-react";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {useToast} from "@/components/ui/use-toast";
import {SubmitHandler, useForm} from "react-hook-form";
import {ToastAction} from "@/components/ui/toast";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";
import {useCreateRequest, useFetchPriority} from "@/app/dashboard/request/_hooks/request_hook";
import {IPriority} from "@/app/dashboard/request/_services/definition";

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
            toast({
                title: "Create request ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
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
                {errors.name &&
                    <div className="flex space-x-2 items-center text-red-600">
                        <CircleAlert size={18}  />
                        <span > This field is required</span>
                    </div>
                }
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
                {errors.statusId &&
                    <div className="flex space-x-2 items-center text-red-600">
                        <CircleAlert size={18}  />
                        <span > This field is required</span>
                    </div>
                }
                <label htmlFor='description'>Description</label>
                <textarea   placeholder='Ex: Cable 2m red' {...register("description",{required:true})}
                            className='outline-none p-2 border '  />
                {errors.description &&
                    <div className="flex space-x-2 items-center text-red-600">
                        <CircleAlert size={18}  />
                        <span > This field is required</span>
                    </div>
                }
                <CreateButton label="Post request" isLoading={isCreateLoading}/>
                <CancelButton HandleClickCancel={props.HandleClickCancel}/>
            </div>
        </form>
    );
};

export default CreateRequestFrom;