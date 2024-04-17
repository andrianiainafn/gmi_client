"use client"
import React from 'react';
import ProfileHeader from "@/app/dashboard/profile/_components/profile_header";
import {useFetchProfile} from "@/app/dashboard/profile/_hooks/profile_hook";

const ProfileContainer = () => {
    const {data,isLoading,isSuccess} = useFetchProfile()
    return (
        <div>
            {
                isSuccess && (
                    <ProfileHeader avatarUrl={data.data.account.profileUrl} name={`${data.data.account.firstname} ${data.data.account.lastname}`} role={data.data.account.roles[0].roleName}/>
                )
            }
        </div>
    );
};

export default ProfileContainer;