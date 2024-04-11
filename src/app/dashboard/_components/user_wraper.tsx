"use client"
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useSession} from "next-auth/react";

interface Props{
    profileUrl:string,
    firstname:string,
    role:string
}

const UserWrapper = (props:Props) => {
    const session = useSession()
    return (
        <div className="flex items-center space-x-2">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
                <h5>
                    {session.data?.user?.name}
                </h5>
                <p className="opacity-75">{props.role}</p>
            </div>
        </div>

    );
};

export default UserWrapper;