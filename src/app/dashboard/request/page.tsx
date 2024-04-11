import React from 'react';
import RequestBar from "@/app/dashboard/request/_components/tab/request_bar";
import RequestTabFilter from "@/app/dashboard/request/_components/tab/tab_filter";
import CreateMaterialButton from "@/app/dashboard/material/_components/tab/create_material_button";
import RequestContainer from "@/app/dashboard/request/_components/elements/request_container";
import OpenModalButton from "@/app/_common/components/open_modal_button";
import CreateRequestButton from "@/app/dashboard/request/_components/tab/create_request_button";

const Page = () => {
    return (
        <div className=" flex flex-col space-y-6" >
            <RequestBar/>
            <RequestTabFilter/>
            <CreateRequestButton/>
            <RequestContainer/>
        </div>
    );
};

export default Page;