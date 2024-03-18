import React, {PropsWithChildren} from 'react';
import LeftBar from "@/app/dashboard/_components/left_bar";

export  default function  ExampleLayout ({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-between">
            <LeftBar/>
            <div className="w-[85%]">
                {children}
            </div>
        </div>
    );
};

