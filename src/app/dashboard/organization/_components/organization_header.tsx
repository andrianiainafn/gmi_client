"use client"
import React from 'react';
import Image from "next/image";
import {formatDate} from "@/app/_common/util";
import {useOrganizationStore} from "@/app/dashboard/organization/_state/organization_state";


const OrganizationHeader = () => {
    const organizations = useOrganizationStore.use.organizations()
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
                            <h3 className="text-teal-500 text-3xl font-bold ">
                                {
                                    organizations[0].organizationName
                                }
                            </h3>
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