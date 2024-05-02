"use client"
import React, {useEffect} from 'react';
import ProfileHeader from "@/app/dashboard/profile/_components/element/profile_header";
import {useFetchProfile} from "@/app/dashboard/profile/_hooks/profile_hook";
import EditPersonalInfoForm from "@/app/dashboard/profile/_components/form/edit_personal_info_form";
import EditPasswordForm from "@/app/dashboard/profile/_components/form/edit_password_form";
import ProfileRequestContainer from "@/app/dashboard/profile/_components/element/profile_request_container";

const ProfileContainer = () => {
    const {data,isLoading,isSuccess} = useFetchProfile()
    return (
        <>
            {
                isSuccess && (
                    <div className="w-full">
                        <ProfileHeader avatarUrl={data.data.account.profileUrl} name={`${data.data.account.firstname} ${data.data.account.lastname}`} role={data.data.account.roles[0].roleName} providerType={data.data.account.providerType}/>
                        <div className="mt-14"/>
                        <div className="flex space-x-5 w-full">
                            <div className="flex flex-col space-y-3 flex-[40%]">
                                <div className=" flex flex-col  space-y-3" >
                                    <h3 className="font-semibold text-xl">Personal information</h3>
                                    <EditPersonalInfoForm email={data.data.account.email} firstname={data.data.account.firstname} lastname={data.data.account.lastname}/>
                                </div>
                                <div className=" flex flex-col space-y-3 " >
                                    <h3 className="font-semibold text-xl ">
                                        Security
                                    </h3>
                                    <EditPasswordForm/>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3 flex-[65%] ">
                                <h3 className="font-semibold text-xl ">Last requests</h3>
                                <ProfileRequestContainer requests={data.data.requests}/>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ProfileContainer;