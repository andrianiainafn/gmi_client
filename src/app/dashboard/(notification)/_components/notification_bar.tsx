import React from 'react';
import {X} from "lucide-react";
import { Tabs,TabsList, TabsTrigger } from "@/components/ui/tabs"
import NotificationMovementContainer from "@/app/dashboard/(notification)/_components/notification_movement_container";
import NotificationRequestContainer from "@/app/dashboard/(notification)/_components/notification_request_container";
import NotificationReportContainer from "@/app/dashboard/(notification)/_components/notification_report_container";
import {INotification} from "@/app/dashboard/(notification)/_services/definition";

interface Props{
    HandleClickClose:(isShow:boolean)=>void,
    isShow:boolean
    request:INotification[]
}

const NotificationBar = (props:Props) => {
    const{HandleClickClose,isShow}=props
    return (
        <div className="relative bg-white ">
            <div className="absolute inset-x-0 top-0 z-10 flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-xl">Notification</h3>
                    <X  className="cursor-pointer font-semibold" onClick={()=>HandleClickClose(!isShow)}/>
                </div>
                <div >
                    <Tabs defaultValue="request" >
                        <TabsList className="flex justify-between">
                            <TabsTrigger value="movement">
                                <div className="space-x-2">
                                    <span>Movement</span>
                                    <span className="bg-teal-500 bg-opacity-40 rounded-full px-1 text-teal-500 ">
                                        3
                                    </span>
                                </div>
                            </TabsTrigger>
                            <TabsTrigger value="request">Request</TabsTrigger>
                            <TabsTrigger value="report">Report</TabsTrigger>
                        </TabsList>
                        <NotificationMovementContainer/>
                        <NotificationRequestContainer />
                        <NotificationReportContainer/>
                    </Tabs>

                </div>
            </div>
        </div>
    );
};

export default NotificationBar;