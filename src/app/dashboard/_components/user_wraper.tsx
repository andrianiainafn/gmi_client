"use client"
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useSession} from "next-auth/react";

interface Props{
    profileUrl:string,
    firstname:string,
    role:string,
    providerType:string
}

const UserWrapper = (props:Props) => {
    const baseUrl= "http://localhost:8888"
    return (
        <div className="flex items-center space-x-2">
            <Avatar>
                {
                    props.providerType === 'credential' ? (
                        <AvatarImage src={`${baseUrl}/${props.profileUrl}`} />
                    ):(
                        <AvatarImage src={props.profileUrl} />
                    )
                }
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