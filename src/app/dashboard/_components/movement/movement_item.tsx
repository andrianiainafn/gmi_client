import React from 'react';
import {Avatar} from "@/components/ui/avatar";
import UserWrapper from "@/app/dashboard/_components/user_wraper";

const MovementItem = () => {
    return (
        <div className=" flex flex-col space-y-2 shadow-sm p-2">
            <div className="flex  items-start space-x-4">
                <UserWrapper profileUrl="" firstname=""/>
                <div className='bg-yellow-400 rounded-full h-3 w-3 mt-2'/>
            </div>
            <p className="text-[1em] font-light">
                Attribute the Dell Attitude machine to Alice from the Marketing department.
            </p>
            <p className="text-medium dark:text-white text-sm">Two days ago.</p>
        </div>
    );
};

export default MovementItem;