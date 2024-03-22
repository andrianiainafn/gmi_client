import React from 'react';
import {Search} from "lucide-react";

const MaterialBar = () => {
    return (
        <div className="flex border justify-between border-gray-200 dark:border-gray-500 items-center py-2 px-2 w-[300px] ">
            <input placeholder="Search..." className="outline-none bg-none bg-transparent" />
            <Search className="flex flex-en text-gray-200"/>
        </div>
    );
};

export default MaterialBar;