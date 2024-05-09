"use client"
import React, {useState} from 'react';
import Image from "next/image";
import {formatDate} from "@/app/_common/util";
import {useOrganizationStore} from "@/app/dashboard/organization/_state/organization_state";
import {Pencil} from "lucide-react";
import EditNameForm from "@/app/dashboard/organization/_components/form/edit_name_form";


const OrganizationHeader = () => {
    const organizations = useOrganizationStore.use.organizations()
    const [isEditOrganizationName,setIsEditOrganizationName] = useState<boolean>(false)
    const HandleClickEditOrganizationName = ()=>{
        setIsEditOrganizationName(prevState => !prevState)
    }
    return (
        <div className="flex  space-x-2">
            {
                organizations.length != 0 && (
                    <>
                        {
                            organizations[0].organizationLogo ? (
                                <Image src={organizations[0].organizationLogo} alt="logo" width={50} height={70}/>
                            ):(
                                <div className="bg-gray-400  bg-opacity-70 text-gray-600 flex justify-center items-center h-[20vh] w-[15vw]">
                                    Organization&lsquo;s logo
                                </div>
                            )
                        }

                        <div className="flex flex-col space-y-2">
                            {
                                isEditOrganizationName ? (
                                    <EditNameForm organizationId={organizations[0].organizationId} HandleClickCancel={HandleClickEditOrganizationName} organizationName={organizations[0].organizationName}/>
                                    ):(
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-teal-500 text-3xl font-bold ">
                                            {
                                                organizations[0].organizationName
                                            }
                                        </h3>
                                        <Pencil size={16} className="cursor-pointer" onClick={HandleClickEditOrganizationName} />
                                    </div>
                                )
                            }
                            <p className="opacity-70">
                                Created {formatDate(organizations[0].createdAt)}
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default OrganizationHeader;