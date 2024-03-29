import React from 'react';
import {X} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props{
    HandleClickClose:(isShow:boolean)=>void,
    isShow:boolean
}

const NotificationBar = (props:Props) => {
    const{HandleClickClose,isShow}=props
    return (
        <div className="relative bg-white">
            <div className="absolute inset-x-0 top-0 z-10 flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-xl">Notification</h3>
                    <X  className="cursor-pointer font-semibold" onClick={()=>HandleClickClose(!isShow)}/>
                </div>
                <div>
                    <Tabs defaultValue="movement" >
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
                        <TabsContent value="movement">Movement.</TabsContent>
                        <TabsContent value="request">Request.</TabsContent>
                        <TabsContent value="report">Report.</TabsContent>
                    </Tabs>

                </div>
            </div>
        </div>
    );
};

export default NotificationBar;