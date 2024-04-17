import React, {useEffect, useState} from 'react';
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateUser, useFetchRoles} from "@/app/dashboard/user/_hooks/user_hook";
import {useFetchDepartments} from "@/app/dashboard/department/_hooks/department_hook";
import {IDepartment} from "@/app/dashboard/department/_services/definition";
import RoleSelectContainer from "@/app/dashboard/user/_components/form/role_select_container";
import {useUserSectionStore} from "@/app/dashboard/user/state/user_state";
import {ToastAction} from "@/components/ui/toast";
import {toast} from "@/components/ui/use-toast";

interface Props{
    HandleClick:()=>void
}
interface IFormInput{
    firstname:string,
    lastname:string
    email:string
    roleId:string,
    departmentId:string
}

const CreateUserForm = (props:Props) => {
    const users = useUserSectionStore.use.users()
    const roleSelected = useUserSectionStore.use.selectedRole()
    const updateRoleSelected = useUserSectionStore.use.updateSelectedRole()
    const updateUsers = useUserSectionStore.use.updateUsers()
    const {isSuccess,data,isLoading} = useFetchRoles(0,5)
    const {data:departmentData,isLoading:isDepartmentLoading,isSuccess:isDepartmentSuccess}= useFetchDepartments()
    const {mutate,data:userData,isSuccess:isCreateSuccess,isLoading:isCreateLoading} = useCreateUser()
    const [error,setError] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        if(roleSelected.length === 0){
            setError(true)
        }else{
            mutate({
                firstname:data.firstname,
                lastname:data.lastname,
                departmentId:data.departmentId,
                password:'password',
                email:data.email,
                rolesId:roleSelected
            })
        }
    }
    const HandleClickRole = (roleSelectedId:string)=>{
        if(roleSelected.includes(roleSelectedId)){
            roleSelected.splice(roleSelected.indexOf(roleSelectedId),1)
        }else{
            roleSelected.push(roleSelectedId)
        }
        updateRoleSelected([...roleSelected])
    }
    useEffect(() => {
        if(isCreateSuccess){
            const userUpdated  = [userData?.data,...users]
            updateUsers([...userUpdated])
            toast({
                title: "Create user ",
                variant: 'success',
                description: "User created successfully",
                action: (
                    <ToastAction altText="Goto users to undo">Undo</ToastAction>
                ),
            })
        }
    }, [isCreateSuccess]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5 space-y-2">
                <div className="flex flex-col space-y-1">
                    <label htmlFor='name'>Firstname</label>
                    <input type='text'  placeholder='Ex: Doe' {...register("firstname",{required:true})}
                           className='outline-none p-2 border '  />
                    <FieldEmptyAlert error={errors.firstname}/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor='name'>Lastname</label>
                    <input type='text'  placeholder='Ex: John' {...register("lastname",{required:true})}
                           className='outline-none p-2 border '  />
                    <FieldEmptyAlert error={errors.lastname}/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor='name'>Email</label>
                    <input type='email'  placeholder='Ex: doe@gmail.com' {...register("email",{required:true})}
                           className='outline-none p-2 border '  />
                    <FieldEmptyAlert error={errors.email}/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor='statusId'>Role</label>
                    {
                        isSuccess && (
                            <RoleSelectContainer roles={data.data}  HandleClickRole={HandleClickRole}/>
                        )
                    }
                    <FieldEmptyAlert error={error}/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor='statusId'>Department</label>
                    <select {...register("departmentId",{required:true})} className="bg-transparent border px-2 py-3">
                        <option disabled selected value="">Choose an department</option>
                        {
                            isDepartmentSuccess && (
                                <>
                                    {
                                        departmentData.data.map((elem:IDepartment,key:number)=>(
                                            <option  key={key} value={elem.departmentId}>{elem.departmentName}</option>
                                        ))
                                    }
                                </>
                            )
                        }
                    </select>
                    <FieldEmptyAlert error={errors.departmentId}/>
                </div>
                <CreateButton label="Post request" isLoading={isCreateLoading}/>
                <CancelButton HandleClickCancel={props.HandleClick}/>
            </div>
        </form>
    );
};

export default CreateUserForm;