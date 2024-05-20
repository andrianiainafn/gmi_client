import React from 'react';
import ButtonProviders from "@/components/button_list_provider";
import LoginForm from "@/app/login/_components/login_form";

const Page = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="w-[40%] flex flex-col space-y-4">
                <LoginForm/>
                <ButtonProviders/>
            </div>
        </div>
    );
};

export default Page;