"use client"
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateAccount} from "@/app/signin/_hooks/auth_hook";
import CreateButton from "@/app/_common/components/create_button";
import {toast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {useNavigation} from "react-day-picker";
import {redirect} from "next/navigation";


interface InputForm{
    email:string
    password:string
    lastname:string
    firstname:string
    confirmPassword:string
    organizationName:string
}

const RegisterForm = () => {
    const {mutate,isSuccess,isLoading} = useCreateAccount()
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<InputForm>()
    const onSubmit: SubmitHandler<InputForm> = async (data, event) => {
        console.log(data)
        if(data.confirmPassword === data.password){
            mutate(
                {
                    email:data.email,
                    password:data.password,
                    lastname:data.lastname,
                    organizationName:data.organizationName,
                    firstname:data.firstname
                }

            )
        }
    }
    useEffect(() => {
        if(isSuccess){
            toast({
                title: "Create account ",
                description: "Account has been created successfully",
                variant: "success",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
            redirect("/login")
        }
    }, [isSuccess]);
    return (
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-2">
                    <label>Lastname</label>
                    <input
                        {...register('lastname')}
                        type="text" className="outline-none p-2 border" placeholder="Doe"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label>Firstname</label>
                    <input
                        {...register('firstname')}
                        type="text" className="outline-none p-2 border" placeholder="John"
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <label>Email</label>
                <input
                    {...register('email')}
                    type="email" className="outline-none p-2 border" placeholder="exemple@gmail.com"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label>Organization Name</label>
                <input
                    {...register('organizationName')}
                    type="text" className="outline-none p-2 border" placeholder="My organization"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label>Password</label>
                <input
                    {...register('password')}
                    type="password" className="outline-none p-2 border"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label>Confirm password</label>
                <input
                    {...register('confirmPassword')}
                    type="password" className="outline-none p-2 border"
                />
            </div>
            <CreateButton label="Sign in" isLoading={isLoading}/>
        </form>
    );
};

export default RegisterForm;