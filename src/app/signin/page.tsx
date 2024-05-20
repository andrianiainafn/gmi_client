import React from 'react';
import LoginForm from "@/app/login/_components/login_form";
import ButtonProviders from "@/components/button_list_provider";
import RegisterForm from "@/app/signin/_components/register_form";
import Link from "next/link";

const Page = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="w-[40%] flex flex-col space-y-4">
                <h3 className="font-bold text-xl">
                    We&apos;re excited to welcome you! Sign up to start enjoying our services.
                </h3>
                <RegisterForm/>
                <ButtonProviders/>
                <div>
                    <h3> Already have an account? <Link href="/login" className="text-teal-500">Log in here</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Page;