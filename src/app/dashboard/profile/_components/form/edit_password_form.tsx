import React from 'react';
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import {SubmitHandler, useForm} from "react-hook-form";
import CancelButton from "@/app/_common/components/cancel_button";
import CreateButton from "@/app/_common/components/create_button";

interface IFormInput{
    actualPassword:string
    password:string
    confirmPassword:string
}


const EditPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>({

    })
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid w-full   gap-1.5">
                <label htmlFor='actualPassword'>Actual password</label>
                <input type='text'  placeholder='Ex: strongPassword54!' {...register("actualPassword",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.actualPassword}/>
                <label htmlFor='password'>New password</label>
                <input type='text'  placeholder='Ex: Password54Strong!' {...register("password",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.password}/>
                <label htmlFor='confirmPassword'>Confirm password</label>
                <input type='password'  placeholder='Ex: Password54Strong!' {...register("confirmPassword",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.password}/>
                <div className="flex justify-end items-center space-x-3">
                    <CancelButton HandleClickCancel={()=>console.log('')}/>
                    <CreateButton label="Confirm" isLoading={false}/>
                </div>
            </div>
        </form>
    );
};

export default EditPasswordForm;