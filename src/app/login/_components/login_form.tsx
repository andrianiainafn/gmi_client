"use client"
import React from 'react';
import {signIn} from "next-auth/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {LoginSchemaType,  SignUpSchemaType} from "@/app/login/_services/definition";
import {Button} from "@/components/ui/button";
import Link from "next/link";




const LoginForm = () => {
    const form = useForm<LoginSchemaType>()
    const router = useRouter();
    const onSubmit: SubmitHandler<SignUpSchemaType> = async (data, event) => {
        const callbackUrl = "/dashboard"
        const formData = new FormData()
        formData.append('email' , data.email);
        formData.append('password' , data.password)
        try{
            console.log(formData.get('email'));
            await signIn("credentials",{
                email: formData.get('email'),
                password: formData.get('password'),
                callbackUrl
            })
            router.push('/dashboard')
        }catch (e: Error | any) {
            console.log(e);
        }
    }
    return (
        <form className="flex flex-col space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2">
                <label>Email</label>
                <input
                    {...form.register('email')}
                    type="email" className="outline-none p-2 border" placeholder="exemple@gmail.com"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label>Password</label>
                <input
                    {...form.register('password')}
                    type="password" className="outline-none p-2 border"
                />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" className="cursor-pointer"/>
                    <label>Remember me</label>
                </div>
                <Link href="">Forgot password ?</Link>
            </div>
            <Button className="bg-teal-500" >
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;