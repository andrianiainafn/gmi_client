import React from 'react';
import TableHeader from "@/app/dashboard/department/_components/table/table_header";
import TableRow from "@/app/dashboard/department/_components/table/table_row";


const DepartmentTableContainer = () => {
    return (
        <table className="w-full" >
            <TableHeader />
            <TableRow />
        </table>
    );
};

export default DepartmentTableContainer;
