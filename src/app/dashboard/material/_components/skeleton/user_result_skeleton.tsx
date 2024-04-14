import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const UserResultSkeleton = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Skeleton className="rounded-full h-10 w-10"/>
            </div>
            <div className="flex flex-col">
                <Skeleton className="w-12 h-3" />
                <Skeleton className="w-12 h-3" />
            </div>
            <Skeleton className="h-6 w-10"/>
        </div>
    );
};

export default UserResultSkeleton;