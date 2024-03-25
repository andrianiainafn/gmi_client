import React from 'react';
import MaterialBar from "@/app/dashboard/material/_components/tab/material_bar";
import TabFilter from "@/app/dashboard/material/_components/tab/tab_filter";
import TableContainer from "@/app/dashboard/material/_components/table/table_container";
import MaterialPagination from "@/app/dashboard/material/_components/pagination/material_pagination";
import CreateMaterialButton from "@/app/dashboard/material/_components/tab/create_material_button";

const Page = () => {
    return (
        <div className=" flex flex-col space-y-6">
            <MaterialBar/>
            <TabFilter/>
            <CreateMaterialButton/>
            <TableContainer/>
            <MaterialPagination/>
        </div>
    );
};

export default Page;