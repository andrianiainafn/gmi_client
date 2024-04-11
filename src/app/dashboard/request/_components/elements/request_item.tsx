import React from 'react';
import UserWrapper from "@/app/dashboard/_components/user_wraper";
import {Button} from "@/components/ui/button";
import {Pencil} from "lucide-react";

interface Props{

}


const RequestItem = (props:Props) => {
    return (
        <div className="flex flex-col space-y-4 shadow-sm p-2 ">
            <div className="flex items-center justify-between">
                <UserWrapper profileUrl="" firstname="" role="@Assistant"/>
                <div className="flex items-center text-sm space-x-2 bg-red-500 bg-opacity-30 text-red-600 py-1 px-3 rounded-full">
                    <div className="bg-red-600 rounded-full h-2 w-2 "/>
                    <p>
                        High
                    </p>
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <p className="opacity-75">
                    2 hours ago
                </p>
                <h2 className="">
                    Laptop with more space
                </h2>
                <p className="text-gray-800">
                    Some description about the request, what material do you want ?
                    How the administrator can help about that?
                    Write a clear description
                </p>

                <div className="flex space-x-2 items-center justify-end">
                    <div className="flex space-x-2 items-center justify-start">
                        <h3 className="">
                            Status:
                        </h3>
                        <div className="flex items-center text-sm space-x-2 bg-gray-300 bg-opacity-30  py-1 px-3 rounded-full">
                            {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                            <p>
                                Pending
                            </p>
                        </div>
                    </div>
                    <Button variant="ghost" className="flex space-x-1 items-center">
                        <span>Edit status</span>
                        <Pencil size={16}/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RequestItem;