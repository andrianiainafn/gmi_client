import React from 'react';
import MaterialBar from "@/app/dashboard/material/_components/material_bar";
import TabFilter from "@/app/dashboard/material/_components/tab_filter";

const Page = () => {
    return (
        <div className=" flex flex-col space-y-3">
            <MaterialBar/>
            <TabFilter/>
        </div>
    );
};

export default Page;