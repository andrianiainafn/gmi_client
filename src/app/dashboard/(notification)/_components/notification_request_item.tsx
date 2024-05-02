"use client"
import React, {useEffect} from 'react';
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {Button} from "@/components/ui/button";
import {formatDateToMdy} from "@/app/_common/util";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import {useMarkNotificationRead} from "@/app/dashboard/(notification)/_hooks/notification_hook";
import {Loader2} from "lucide-react";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";

interface Props{
    account:IAccount
    read:boolean
    notificationId:string
    createdAt:Date
}

const NotificationRequestItem = (props:Props) => {
    const{account,read,notificationId,createdAt} = props
    const updateNotification = useRequestStore.use.updateNotification()
    const notifications = useRequestStore.use.notifications()
    const {mutate,data,isSuccess,isLoading}=useMarkNotificationRead()
    const HandleClickMarkAsRead = ()=>{
        mutate(notificationId)
    }
    useEffect(() => {
        if(isSuccess){
            const index = notifications.findIndex(objet => objet.notificationId === notificationId);
            notifications.splice(index, 1);
            notifications.splice(index,0,data?.data)
            updateNotification([...notifications])
        }
    }, [isSuccess]);
    return (
        <div  className={`flex flex-col p-2 ${read ? "": "bg-teal-500 bg-opacity-10"}`}>
            <div className="flex justify-between">
                <UserWrapper profileUrl={account.profileUrl} firstname={`${account.lastname} ${account.firstname}`} role={account.roles[0].roleName} providerType={account.providerType}/>
                {
                    !read && (
                        <Button onClick={HandleClickMarkAsRead}  variant="secondary" >
                            Mark as read
                            {
                                isLoading && (
                                    <Loader2  className="mr-2 h-4 w-4 animate-spin" />
                                )
                            }
                        </Button>
                    )
                }
            </div>
            <p className="text-justify text-[1em] opacity-75">
                Awaiting your approval, {account.lastname} has submitted a new equipment
            </p>
            <span className="text-sm"> request on {formatDateToMdy(createdAt)}</span>
        </div>
    );
};

export default NotificationRequestItem;