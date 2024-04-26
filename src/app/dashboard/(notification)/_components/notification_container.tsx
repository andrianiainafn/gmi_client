"use client"
import React, {useState} from 'react';
import {useUserStore} from "@/state/global_state";
import NotificationBar from "@/app/dashboard/(notification)/_components/notification_bar";
import {INotification} from "@/app/dashboard/(notification)/_services/definition";
import {useSubscription} from "react-stomp-hooks";

interface Props{
    request:INotification[]
}


const NotificationContainer = (props:Props) => {
    const isShow = useUserStore.use.isShowNotification()
    const setIsShow = useUserStore(state => state.updateIsShowNotification)

    return (
    <>
        {
            isShow && (
                <div className="bg-white shadow-sm border-[1px] border-gray-200 dark:border-none dark:bg-gray-950 z-20 p-2 rounded-lg h-[80vh] flex flex-col space-y-3 bottom-5  w-[25vw] absolute top-[10vh] right-0">
                    <NotificationBar HandleClickClose={setIsShow} isShow={isShow} request={[]}/>
                </div>
            )
        }
    </>
    );
};

export default NotificationContainer;