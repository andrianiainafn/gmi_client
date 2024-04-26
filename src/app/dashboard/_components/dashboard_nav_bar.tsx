"use client"
import React, {useEffect, useState} from 'react';
import { MdWavingHand } from "react-icons/md";
import {Bell, Settings} from "lucide-react";
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {useUserStore} from "@/state/global_state";
import NotificationContainer from "@/app/dashboard/(notification)/_components/notification_container";
import {useFetchUserInfo} from "@/app/dashboard/user/_hooks/user_hook";
import SettingModal from "@/app/_common/components/setting_modal";
import {useFetchAllRequestNotification} from "@/app/dashboard/(notification)/_hooks/notification_hook";
import {INotification} from "@/app/dashboard/(notification)/_services/definition";



const DashboardNavBar = () => {
    const isShow = useUserStore.use.isShowNotification()
    const {data:notificationData,isSuccess:notificationSucces,isLoading} = useFetchAllRequestNotification()
    const isShowSetting = useUserStore.use.isShowSetting()
    const setIsShowSetting = useUserStore.use.updateIsShowSetting()
    const [notification,setNotification]=useState<INotification[]>([])
    const setIsShow = useUserStore(state => state.updateIsShowNotification)
    const {data,isSuccess}=useFetchUserInfo()
    const userInfo = useUserStore.use.userInfo()
    const updateUserINfo = useUserStore.use.updateUserInfo()


    useEffect(()=>{
        if (isSuccess){
            updateUserINfo(data.data)
        }
    },[isSuccess])

    useEffect(() => {
        if(notificationSucces){
            setNotification([...notificationData.data])
        }
    }, [notificationSucces]);

    return (
            <div className="py-2 fixed flex justify-between bg-white z-10 items-center top-0 w-[84%] h-[10vh]">
                <h2 className="flex items-center space-x-2 text-xl">
                <span>
                    Hey, {userInfo.firstname}
                </span>
                    <MdWavingHand/>
                </h2>
                <div className="flex space-x-4 items-center">
                    <Bell className={`${isShow ? 'text-teal-500': ''} hover:text-teal-500 cursor-pointer `} onClick={()=>setIsShow(!isShow)} />
                    <Settings className={`${isShowSetting ? 'text-teal-500': ''} hover:text-teal-500 cursor-pointer `} onClick={()=>setIsShowSetting(!isShowSetting)}/>
                    {
                        isSuccess && (
                            <UserWrapper firstname={`${userInfo.firstname} ${userInfo.lastname}`} profileUrl={userInfo.profileUrl} role={userInfo.roles[0].roleName}/>
                        )
                    }
                </div>
                <NotificationContainer request={[]}/>
                <SettingModal/>
            </div>
    );
};

export default DashboardNavBar;