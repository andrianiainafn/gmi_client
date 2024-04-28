"use client"
import React  from 'react';
import {TabsContent} from "@/components/ui/tabs";
import {
    useFetchAllRequestNotification,
} from "@/app/dashboard/(notification)/_hooks/notification_hook";
import {INotification} from "@/app/dashboard/(notification)/_services/definition";
import {useSubscription} from "react-stomp-hooks";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";
import NotificationRequestItem from "@/app/dashboard/(notification)/_components/notification_request_item";


const NotificationRequestContainer = () => {
    const {data,isSuccess,isLoading} = useFetchAllRequestNotification()
    const notifications = useRequestStore.use.notifications()
    const updateNotification = useRequestStore.use.updateNotification()
    useSubscription('/notification/public', (message) => {
        console.log("realtime")
        notifications.push(JSON.parse(message.body))
        notifications.reverse()
        updateNotification([...notifications])
        console.log(notifications)
    });
    updateNotification(data?.data)
    return (
        <TabsContent value="request" className="space-y-2 ">
                {
                    isSuccess && (
                        notifications.map((elem:INotification,key:number)=>(
                            <NotificationRequestItem key={key} account={elem.account} read={elem.read} notificationId={elem.notificationId} createdAt={elem.createdAt}/>
                        ))
                    )
                }
        </TabsContent>
    );
};

export default NotificationRequestContainer;