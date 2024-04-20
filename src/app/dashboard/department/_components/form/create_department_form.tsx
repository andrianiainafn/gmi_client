import React, {useEffect} from 'react';
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {useCreateDepartment} from "@/app/dashboard/department/_hooks/department_hook";
import {SubmitHandler, useForm} from "react-hook-form";
import UserList from "@/app/dashboard/department/_components/element/user_list";
import {useDepartmentStore} from "@/app/dashboard/department/state/department_state";


interface IFormInput{
    name:string,
}

interface Props{
    HandleClickCancel:()=>void
}

const CreateDepartmentForm = (props:Props) => {
    const {mutate,data,isSuccess,isLoading:isCreateLoading} = useCreateDepartment()
    const departments = useDepartmentStore.use.departments()
    const members = useDepartmentStore.use.members()
    const updateDepartments = useDepartmentStore.use.updateDepartments()
    const updateMembers = useDepartmentStore.use.updateMember()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        const accountId = members.map(member=>member.accountId)
        mutate(
            {
                departmentName:data.name,
                userId:accountId
            }
        )
    }
    useEffect(() => {
        updateMembers([])
    }, []);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5 space-y-2">
                <label htmlFor='name'>Name</label>
                <input type='text'  placeholder='Ex: Cable Rj45' {...register("name",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.name}/>
                <UserList />
                <CreateButton label="Create material" isLoading={isCreateLoading}/>
                <CancelButton HandleClickCancel={props.HandleClickCancel}/>
            </div>
        </form>
    );
};

export default CreateDepartmentForm;