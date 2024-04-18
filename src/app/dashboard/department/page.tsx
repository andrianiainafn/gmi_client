import React from 'react';
import DepartmentBar from "@/app/dashboard/department/_components/tab/department_bar";
import CreateDepartmentButton from "@/app/dashboard/department/_components/tab/create_department_button";

const Page = () => {
    return (
        <div>
            <DepartmentBar/>
            <CreateDepartmentButton/>
        </div>
    );
};

export default Page;