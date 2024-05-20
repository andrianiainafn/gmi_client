'use client'
import React from 'react';
import {signIn, useSession} from "next-auth/react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {FaGithub} from "react-icons/fa6";

const ButtonProviders = () => {
    const callbackUrl = "/dashboard"
    return (
        <>
            <Button
                onClick={()=>signIn("google",{callbackUrl})}
                variant='outline'
                className='flex items-center space-x-3 px-12 w-full '>
                <Image src='google.svg' alt='google icon' width={20} height={20}/>
                <p>Continue with google</p>
            </Button>
            <div className='flex space-x-2  justify-center items-center'>
                <div className='h-[1px] bg-black dark:bg-white w-[40%]'/>
                <span>Or</span>
                <div className='h-[1px] bg-black w-[40%] dark:bg-white'/>
            </div>
            <Button
                onClick={()=>signIn("github",{callbackUrl})}
                variant='outline'
                className='flex items-center space-x-3  px-12 w-full' >
                <FaGithub className='w-4 h-4'/>
                <p className=''>Continue with github</p>
            </Button>
        </>
    );
};

export default ButtonProviders;