import React from 'react';
import UserContainer from "@/app/dashboard/user/_components/element/user_container";
import UserBar from "@/app/dashboard/user/_components/tab/user_bar";
import CreateUserButton from "@/app/dashboard/user/_components/tab/create_user_button";

const Page = () => {
    return (
        <div className=" flex flex-col space-y-6" >
            <UserBar/>
            <CreateUserButton/>
            <UserContainer/>
        </div>
    );
};

export default Page;