"use client"
import React from 'react';
import {useForm,SubmitHandler} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
import {IMaterialStatus} from "@/app/dashboard/material/_services/definition";
import {CircleAlert} from "lucide-react";

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
    const {data,isLoading,isSuccess} = useFetchAllStatus()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        console.log(data)
    }
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
                <Button className="bg-teal-500 h-[6vh]" type="submit" >
                    Create material
                </Button>
                <Button variant="secondary" className="h-[6vh]"  type="reset" onClick={props.HandleClickCancel}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default CreateMaterialForm;