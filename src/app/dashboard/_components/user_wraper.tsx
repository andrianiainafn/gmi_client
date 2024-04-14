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
    return (
        <div className="flex items-center space-x-2">
            <Avatar>
                <AvatarImage src={props.profileUrl} />
                <AvatarFallback>
                    {props.firstname.charAt(0).toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div>
                <h5>
                    {props.firstname}
                </h5>
                <p className="opacity-75">@{props.role}</p>
            </div>
        </div>

    );
};

export default UserWrapper;