"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import {SubmitHandler, useForm} from "react-hook-form";


interface InputForm{
    email:string
    password:string
    lastname:string
    firstname:string
    confirmPassword:string
    organizationName:string
}

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm<InputForm>()
    const onSubmit: SubmitHandler<InputForm> = async (data, event) => {

    }
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
            <Button className="bg-teal-500" >
                Sign in
            </Button>
        </form>
    );
};

export default RegisterForm;