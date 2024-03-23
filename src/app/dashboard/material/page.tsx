import React from 'react';
import MaterialBar from "@/app/dashboard/material/_components/tab/material_bar";
import TabFilter from "@/app/dashboard/material/_components/tab/tab_filter";
import TableContainer from "@/app/dashboard/material/_components/table/table_container";

const Page = () => {
    return (
        <div className=" flex flex-col space-y-6">
            <MaterialBar/>
            <TabFilter/>
            <TableContainer/>
        </div>
    );
};

export default Page;