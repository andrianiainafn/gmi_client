import React from 'react';
import MaterialBar from "@/app/dashboard/material/_components/tab/material_bar";
import TabFilter from "@/app/dashboard/material/_components/tab/tab_filter";

const Page = () => {
    return (
        <div className=" flex flex-col space-y-3">
            <MaterialBar/>
            <TabFilter/>
        </div>
    );
};

export default Page;