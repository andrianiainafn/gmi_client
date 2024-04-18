import React from 'react';
import DepartmentBar from "@/app/dashboard/department/_components/tab/department_bar";
import CreateDepartmentButton from "@/app/dashboard/department/_components/tab/create_department_button";
import DepartmentTableContainer from "@/app/dashboard/department/_components/table/table_container";

const Page = () => {
    return (
        <div>
            <DepartmentBar/>
            <CreateDepartmentButton/>
            <DepartmentTableContainer/>
        </div>
    );
};

export default Page;