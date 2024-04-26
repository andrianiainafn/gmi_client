"use client"
import React, {useEffect, useState} from 'react';
import {TabsContent} from "@/components/ui/tabs";
import {useFetchAllRequestNotification} from "@/app/dashboard/(notification)/_hooks/notification_hook";
import {INotification} from "@/app/dashboard/(notification)/_services/definition";
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {useSubscription} from "react-stomp-hooks";
import {formatDateToMdy} from "@/app/_common/util";
import {Button} from "@/components/ui/button";


const NotificationRequestContainer = () => {
    const {data,isSuccess,isLoading} = useFetchAllRequestNotification()
    const [notification, setNotification] = useState<INotification[]>([]);
    useSubscription('/notification/public', (message) => {setNotification(prevState => [...prevState,JSON.parse(message.body)])});
    useEffect(() => {
        if(isSuccess){
            setNotification(data.data)
        }
    }, [isSuccess]);
    return (
        <TabsContent value="request" className="space-y-2">
            {
                isSuccess && (
                    notification.map((elem:INotification,key:number)=>(
                        <div key={key} className={`flex flex-col p-2 ${elem.read ? "": "bg-teal-500 bg-opacity-10"}`}>
                            <div className="flex justify-between">
                                <UserWrapper profileUrl={elem.account.profileUrl} firstname={`${elem.account.lastname} ${elem.account.firstname}`} role={elem.account.roles[0].roleName}/>
                                {
                                    elem.read && (
                                        <Button  variant="secondary" >
                                            Mark as read
                                        </Button>
                                    )
                                }
                            </div>
                            <p className="text-justify text-lg opacity-75">
                                Awaiting your approval, {elem.account.lastname} has submitted a new equipment request on {formatDateToMdy(elem.createdAt)}
                            </p>
                        </div>
                    ))
                )
            }
        </TabsContent>
    );
};

export default NotificationRequestContainer;