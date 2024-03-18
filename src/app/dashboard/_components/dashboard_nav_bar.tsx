"use client"
import React from 'react';
import {useSession} from "next-auth/react";
import { MdWavingHand } from "react-icons/md";
import {Bell, Settings} from "lucide-react";
import UserWrapper from "@/app/dashboard/_components/user_wraper";

const DashboardNavBar = () => {
    const session = useSession()
    return (
        <div className="py-2 flex justify-between items-center">
            <h2 className="flex items-center space-x-2 text-xl">
                <span>
                    Hey, {session.data?.user?.name}
                </span>
                <MdWavingHand/>
            </h2>
            <div className="flex space-x-4 items-center">
                <Bell className="hover:text-teal-500 cursor-pointer" />
                <Settings className="hover:text-teal-500 cursor-pointer"/>
                <UserWrapper/>
            </div>
        </div>
    );
};

export default DashboardNavBar;