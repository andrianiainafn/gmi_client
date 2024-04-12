"use client"
import React, {useEffect} from 'react';
import {useForm,SubmitHandler} from "react-hook-form";
import {useCreateMaterial, useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
import {IMaterialStatus} from "@/app/dashboard/material/_services/definition";
import {CircleAlert} from "lucide-react";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

interface IFormInput{
    name:string,
    description:string,
    statusId:string,
    serialNumber:string
}
interface Props{
    HandleClickCancel:()=>void
}

const CreateMaterialForm = (props:Props) => {
    const material = useMaterialStore.use.material()
    const { toast } = useToast()
    const updateMaterial  = useMaterialStore.use.updateMaterial()
    const {data,isLoading,isSuccess,isError} = useFetchAllStatus()
    const {mutate,data:materialData,isLoading:isCreateLoading,isSuccess:isCreateSuccess} = useCreateMaterial()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        mutate(
            {
                materialName: data.name,
                serialNumber: data.serialNumber,
                description:  data.description,
                statusId:     data.statusId,
                state:       "AVAILABLE"
            }
        )
    }
    useEffect(()=>{
        if(isCreateSuccess){
            const updatedMaterial = [materialData?.data,...material]
            updateMaterial(updatedMaterial)
            console.log(updatedMaterial)
            toast({
                title: "Create material ",
                description: "Material has been created successfully",
                variant: "success",
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
                <label htmlFor='serialNumber'>Serial number</label>
                <input type='text'   placeholder='Ex: E3412' {...register("serialNumber",{required:true}) }
                       className='outline-none p-2 border '  />
                {errors.serialNumber &&
                    <div className="flex space-x-2 items-center text-red-600">
                        <CircleAlert size={18}  />
                        <span > This field is required</span>
                    </div>
                }
                <label htmlFor='statusId'>Status</label>
                <select {...register("statusId",{required:true})} className="bg-transparent border px-2 py-3">
                    <option disabled selected value="">Choose an option</option>
                    {
                        isSuccess && (
                            <>
                                {
                                    data.data.map((elem:IMaterialStatus,key:number)=>(
                                        <option key={key} value={elem.materialStatusId}>{elem.materialStatusName}</option>
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
                <CreateButton label="Create material" isLoading={isCreateLoading}/>
                <CancelButton HandleClickCancel={props.HandleClickCancel}/>
            </div>
        </form>
    );
};

export default CreateMaterialForm;