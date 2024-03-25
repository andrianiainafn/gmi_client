"use client"
import React from 'react';
import {useForm,SubmitHandler} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {useFetchAllStatus} from "@/app/dashboard/material/_hooks/material_hook";
import {IMaterialStatus} from "@/app/dashboard/material/_services/definition";

interface IFormInput{
    name:string,
    description:string,
    statusId:string,
    serialNumber:string
}

const CreateMaterialForm = () => {
    const {data,isLoading,isSuccess} = useFetchAllStatus()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5 space-y-2">
                <label htmlFor='name'>Name</label>
                <input type='text'  placeholder='Ex: Cable Rj45' {...register("name")}
                       className='outline-none p-2 border '  />
                <label htmlFor='serialNumber'>Serial number</label>
                <input type='text'   placeholder='Ex: E3412' {...register("serialNumber")}
                       className='outline-none p-2 border '  />
                <label htmlFor='statusId'>Status</label>
                <select {...register("statusId")} className="bg-transparent border px-2 py-3">
                    <option disabled selected value="">Choose an option</option>
                    {
                        isSuccess && (
                            <>
                                {
                                    data.data.map((elem:IMaterialStatus,key:number)=>(
                                        <option value={elem.materialStatusId}>{elem.materialStatusName}</option>
                                    ))
                                }
                            </>
                        )
                    }
                </select>
                <label htmlFor='description'>Description</label>
                <textarea   placeholder='Ex: Cable 2m red' {...register("description")}
                       className='outline-none p-2 border '  />
                <Button className="bg-teal-500" type="submit" >
                    Create material
                </Button>
                <Button variant="secondary" type="reset" >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default CreateMaterialForm;