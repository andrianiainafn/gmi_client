import React from 'react';
import ButtonProviders from "@/components/button_list_provider";
import LoginForm from "@/app/login/_components/login_form";
import Link from "next/link";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Page = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="w-[40%] flex flex-col space-y-3">
                <h3 className="font-bold text-xl">
                    We&apos;re thrilled to have you back! Log in to continue enjoying our services.
                </h3>
                <p className="opacity-80">
                    <IoIosInformationCircleOutline className="inline text-teal-500"  size={20}/>
                    I had added this default login so that you could quickly see the features of the application, but you can also create your account and start from scratch.
                </p>
                <LoginForm/>
                <ButtonProviders/>
                <div>
                    <h3> Don&apos;t have an account yet? Sign up now to join us! <Link href="/signin" className="text-teal-500">Sign up here</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Page;