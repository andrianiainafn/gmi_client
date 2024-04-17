import React from 'react';
import {useUserStore} from "@/state/global_state";
import {CircleUserRound, LogOut, X} from "lucide-react";
import LinkItem from "@/app/dashboard/_components/link_item";
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";

const SettingModal = () => {
    const isShow = useUserStore.use.isShowSetting()
    const updateIsShowSetting = useUserStore.use.updateIsShowSetting()
    return (
        <>
            {
                isShow && (
                <div className="bg-white shadow-sm border-[1px] border-gray-200 dark:border-none dark:bg-gray-950 z-20 p-2 rounded-lg h-[17vh] flex flex-col space-y-3 bottom-5  w-[25vw] absolute top-[10vh] right-0">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl">
                            Setting
                        </h3>
                        <X  className="cursor-pointer font-semibold" onClick={()=>updateIsShowSetting(!isShow)}/>
                    </div>
                    <div>
                        <LinkItem label="Profile" icon={<CircleUserRound />} href="/dashboard/profile"/>
                    </div>
                    <div onClick={() => signOut({callbackUrl: '/'})} className="flex items-center space-x-3 cursor-pointer hover:text-teal-500">
                        <LogOut />
                        <span>Log Out</span>
                    </div>

                </div>
            )
            }
        </>
    );
};

export default SettingModal;