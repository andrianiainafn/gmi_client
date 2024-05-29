"use client"
import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface Props{
    avatarUrl: string,
    name:string,
    role:string
    providerType:string
}

const ProfileHeader = (props:Props) => {
    const {avatarUrl,name,role,providerType}=props
    const baseUrl= "https://gmiapi-production.up.railway.app"
    return (
        <div className="relative bg-teal-500 bg-opacity-65 h-[16vh] w-full">
            <div className="-bottom-10 absolute left-8 flex items-start space-x-2">
                <Avatar className="w-24 h-24 " >
                    {
                        providerType === 'credentials' ? (
                            <AvatarImage src={`${baseUrl}/${avatarUrl}`} />
                        ):(
                            <AvatarImage src={`${baseUrl}/${avatarUrl}`} />
                        )
                    }
                    <AvatarFallback>
                        {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-xl font-semibold">
                        {
                            name
                        }
                    </h3>
                    <p>@{role}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;