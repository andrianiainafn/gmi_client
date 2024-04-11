"use client"
import React from 'react';
import {useSession} from "next-auth/react";
import { MdWavingHand } from "react-icons/md";
import {Bell, Settings} from "lucide-react";
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {useUserStore} from "@/state/global_state";
import NotificationContainer from "@/app/dashboard/(notification)/_components/notification_container";

const DashboardNavBar = () => {
    const session = useSession()
    const isShow = useUserStore.use.isShowNotification()
    const setIsShow = useUserStore(state => state.updateIsShowNotification)
    return (
        <div className="py-2 flex justify-between items-center relative">
            <h2 className="flex items-center space-x-2 text-xl">
                <span>
                    Hey, {session.data?.user?.name}
                </span>
                <MdWavingHand/>
            </h2>
            <div className="flex space-x-4 items-center">
                <Bell className={`${isShow ? 'text-teal-500': ''} hover:text-teal-500 cursor-pointer `} onClick={()=>setIsShow(!isShow)} />
                <Settings className="hover:text-teal-500 cursor-pointer"/>
                <UserWrapper firstname="" profileUrl="" role="@Admin"/>
            </div>
            <NotificationContainer/>
        </div>
    );
};

export default DashboardNavBar;