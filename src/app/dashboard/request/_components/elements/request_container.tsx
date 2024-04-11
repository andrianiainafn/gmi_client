import React from 'react';
import RequestItem from "@/app/dashboard/request/_components/elements/request_item";

const RequestContainer = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col space-y-4 w-[60%]">
                <RequestItem/>
                <RequestItem/>
                <RequestItem/>
            </div>
            <div className="w-[35%]">

            </div>
        </div>
    );
};

export default RequestContainer;