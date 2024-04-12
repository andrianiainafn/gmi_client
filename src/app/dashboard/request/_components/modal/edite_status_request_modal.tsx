import React, {useEffect, useState} from 'react';
import {useUpdateRequestStatus} from "@/app/dashboard/request/_hooks/request_hook";
import {requestStatus} from "@/app/_common/constant/data";
import CancelButton from "@/app/_common/components/cancel_button";
import {Button} from "@/components/ui/button";
import ModalTitle from "@/app/_common/components/modal_title";
import {Loader2} from "lucide-react";
import {ToastAction} from "@/components/ui/toast";
import {toast} from "@/components/ui/use-toast";
import ActualRequestStatus from "@/app/dashboard/request/_components/form/actual_request_status";
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";

interface Props{
    HandleClickEditStatus:()=>void,
    requestId:string,
    actualRequestStatus:string
}

const EditStatusRequestModal = (props:Props) => {
    const request = useRequestStore.use.request()
    const updateRequest = useRequestStore.use.updateRequest()
    const [newStatus,setNewStatus] = useState<string>('')
    const{requestId,HandleClickEditStatus,actualRequestStatus}=props
    const {mutate,isSuccess,data,isLoading} = useUpdateRequestStatus(requestId)
    const [error,setError] = useState(false)
    const HandleClickNewStatus = (newStatus : string)=>{
        setNewStatus(newStatus)
    }
    const HandleClickConfirm = ()=>{
        if(newStatus !== ''){
            mutate(newStatus)
        }else{
            setError(true)
        }
    }
    useEffect(() => {
        if(isSuccess){
            const index = request.findIndex(objet => objet.requestId === requestId);
            request.splice(index,index,data?.data)
            updateRequest([...request])
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
                <ActualRequestStatus actualRequestStatus={actualRequestStatus}/>
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
                    <FieldEmptyAlert error={error}/>
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