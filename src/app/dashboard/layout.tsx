import React, {PropsWithChildren} from 'react';
import LeftBar from "@/app/dashboard/_components/left_bar";
import DashboardNavBar from "@/app/dashboard/_components/dashboard_nav_bar";

export  default function  ExampleLayout ({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-between">
            <LeftBar/>
            <div className="w-[86%] ml-[14%] flex flex-col  px-3">
                <DashboardNavBar/>
                <div className="mt-[10vh]">
                    {children}
                </div>
            </div>
        </div>
    );
};

