import React, {useState} from 'react';
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {Button} from "@/components/ui/button";
import {Pencil} from "lucide-react";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import EditStatusRequestModal from "@/app/dashboard/request/_components/modal/edite_status_request_modal";
import {formatDate} from "@/app/_common/util";
import {useUserStore} from "@/state/global_state";

interface Props{
    requestId:      string;
    description:    string;
    materialName:   string;
    actualPriority: string;
    requestStatus:  string;
    createdAt:Date
    account: IAccount;
}


const RequestItem = (props:Props) => {
    const userInfo = useUserStore.use.userInfo()
    const{requestId,createdAt,description,materialName,actualPriority,requestStatus,account}=props
    const [isEditStatus,setIsEdit]=useState<boolean>(false)
    const HandleClickEditStatus = ()=>{
        setIsEdit(prev=>!prev)
    }
    return (
            <>
                {
                    isEditStatus && (
                        <EditStatusRequestModal HandleClickEditStatus={HandleClickEditStatus} requestId={requestId} actualRequestStatus={requestStatus}/>
                    )
                }
                <div className="flex flex-col space-y-4 shadow-sm p-2 ">
                    <div className="flex items-center justify-between">
                        <UserWrapper profileUrl={account.profileUrl} firstname={`${account.firstname} ${account.lastname}`} role={account.roles[0].roleName} providerType={account.providerType}/>
                        {
                            actualPriority === 'High' && (
                                <div className="flex items-center text-sm space-x-2 bg-red-500 bg-opacity-30 text-red-600 py-1 px-3 rounded-full">
                                    <div className="bg-red-600 rounded-full h-2 w-2 "/>
                                    <p>
                                        High
                                    </p>
                                </div>
                            )
                        }
                        {
                            actualPriority === 'Medium' && (
                                <div className="flex items-center text-sm space-x-2 bg-blue-400 bg-opacity-30 text-blue-400 py-1 px-3 rounded-full">
                                    <div className="bg-blue-400 rounded-full h-2 w-2 "/>
                                    <p>
                                        Medium
                                    </p>
                                </div>
                            )
                        }
                        {
                            actualPriority === 'Low' && (
                                <div className="flex items-center text-sm space-x-2 bg-teal-500 bg-opacity-30 text-teal-500 py-1 px-3 rounded-full">
                                    <div className="bg-teal-500 rounded-full h-2 w-2 "/>
                                    <p>
                                        Low
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col space-y-3">
                        <p className="opacity-75">
                            {formatDate(createdAt)}
                        </p>
                        <h2 className="">
                            {materialName}
                        </h2>
                        <p className="text-gray-800">
                            {description}
                        </p>
                        <div className="flex justify-between w-full">
                            <div>
                                {
                                    userInfo.accountId === account.accountId && (
                                        <Button  variant="ghost" className="flex  space-x-1 items-center">
                                            <span>Edit request</span>
                                            <Pencil size={16}/>
                                        </Button>
                                    )
                                }
                            </div>
                            <div className="flex space-x-2 items-center justify-end">
                                <div className="flex space-x-2 items-center justify-start">
                                    <h3 className="">
                                        Status:
                                    </h3>
                                    {
                                        requestStatus === 'PENDING' && (
                                            <div className="flex items-center text-sm space-x-2 bg-gray-300 bg-opacity-30  py-1 px-3 rounded-full">
                                                {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                                                <p>
                                                    Pending
                                                </p>
                                            </div>
                                        )
                                    }
                                    {
                                        requestStatus === 'REJECTED' && (
                                            <div className="flex items-center text-sm space-x-2 bg-gray-300 bg-opacity-30  py-1 px-3 rounded-full">
                                                {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                                                <p>
                                                    Rejected
                                                </p>
                                            </div>
                                        )
                                    }
                                    {
                                        requestStatus === 'APPROVED' && (
                                            <div className="flex items-center text-sm space-x-2 bg-gray-300 bg-opacity-30  py-1 px-3 rounded-full">
                                                {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                                                <p>
                                                    Approved
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                                    {
                                        userInfo.roles[0].roleName === "Admin" && (
                                            <Button onClick={HandleClickEditStatus} variant="ghost" className="flex  space-x-1 items-center">
                                                <span>Edit status</span>
                                                <Pencil size={16}/>
                                            </Button>
                                        )
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default RequestItem;