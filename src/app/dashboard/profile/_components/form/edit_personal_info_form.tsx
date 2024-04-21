import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import {SubmitHandler, useForm} from "react-hook-form";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";

interface Props{
    firstname:string,
    lastname:string,
    email:string,
}
interface IFormInput{
    firstname:string,
    lastname:string,
    email:string,
}

const EditPersonalInfoForm = (props:Props) => {
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>({
        defaultValues:{
            firstname:props.firstname,
            lastname:props.lastname,
            email:props.email
        }
    })
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{

    }
    return (
        <form>
            <div className="grid w-full   gap-1.5">
                <label htmlFor='firstname'>Firstname</label>
                <input type='text'  placeholder='Ex: strongPassword54!' {...register("firstname",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.firstname}/>
                <label htmlFor='lastname'>Lastname</label>
                <input type='text'  placeholder='Ex: Password54Strong!' {...register("lastname",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.lastname}/>
                <label htmlFor='email'>Email</label>
                <input type='email'  placeholder='Ex: Password54Strong!' {...register("email",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.email}/>
                <Label htmlFor="picture" className="mt-2">Picture</Label>
                <Input id="picture" className="!cursor-pointer mt-2"  type="file" />
                <div className="flex justify-end items-center space-x-3">
                    <CancelButton HandleClickCancel={()=>console.log('')}/>
                    <CreateButton label="Confirm" isLoading={false}/>
                </div>
            </div>
        </form>
    );
};

export default EditPersonalInfoForm;