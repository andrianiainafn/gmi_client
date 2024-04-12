import React, {useEffect, useState} from 'react';
import {useUpdateRequestStatus} from "@/app/dashboard/request/_hooks/request_hook";
import {requestStatus} from "@/app/_common/constant/data";
import CancelButton from "@/app/_common/components/cancel_button";
import {Button} from "@/components/ui/button";
import ModalTitle from "@/app/_common/components/modal_title";
import {Loader2} from "lucide-react";
import {ToastAction} from "@/components/ui/toast";
import {toast} from "@/components/ui/use-toast";

interface Props{
    HandleClickEditStatus:()=>void,
    requestId:string,
    actualRequestStatus:string
}

const EditStatusRequestModal = (props:Props) => {
    const [newStatus,setNewStatus] = useState<string>('')
    const{requestId,HandleClickEditStatus,actualRequestStatus}=props
    const {mutate,isSuccess,isLoading} = useUpdateRequestStatus(requestId)
    const HandleClickNewStatus = (newStatus : string)=>{
        setNewStatus(newStatus)
    }
    const HandleClickConfirm = ()=>{
        mutate(newStatus)
    }
    useEffect(() => {
        if(isSuccess){
            toast({
                title: "Change material status",
                description: "Material status has been changed successfully",
                variant: "success",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        }
    }, [isSuccess]);
    return (
        <div className="overlay" onClick={HandleClickEditStatus}>
            <div className="central flex flex-col p-2 space-y-4" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={HandleClickEditStatus} label="Edit request status"/>
                <div className="flex flex-col items-start space-y-2">
                    <h4>
                        Actual status :
                    </h4>
                    <div className="flex items-center text-sm space-x-2 bg-gray-300 bg-opacity-30  py-1 px-3 rounded-full">
                        {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                        <p>
                            {actualRequestStatus}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 items-start">
                    <h4>
                        Change status to :
                    </h4>
                    <div className="flex items-center space-x-2">
                        {
                            requestStatus.map((elem:string,key:number)=>(
                                <>
                                    {
                                        elem !== actualRequestStatus && (
                                            <div onClick={()=>HandleClickNewStatus(elem)} key={key}
                                            className={`flex items-center text-sm space-x-2 bg-gray-300
                                            bg-opacity-30 hover:bg-teal-500 cursor-pointer
                                            hover:text-teal-500 hover:bg-opacity-30 py-1 px-3 rounded-full
                                            ${elem === newStatus ? 'bg-teal-500 text-teal-500' : ''}
                                            `}>
                                                {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                                                <p>
                                                    {elem}
                                                </p>
                                            </div>
                                        )
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>
                <Button disabled={isLoading} onClick={HandleClickConfirm} className="bg-teal-500 h-[6vh] flex items-center space-x-2"  >
                    {
                        isLoading && (
                            <Loader2  className="mr-2 h-4 w-4 animate-spin" />
                        )
                    }
                    <span>
                        Confirm change
                    </span>
                </Button>
                <CancelButton HandleClickCancel={HandleClickEditStatus}/>
            </div>
        </div>
    );
};

export default EditStatusRequestModal;