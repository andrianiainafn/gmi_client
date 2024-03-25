import React from 'react';

const TableHeader = () => {
    return (
        <thead className="bg-gray-100 dark:bg-gray-950 text-gray-500 h-10 font-light">
            <tr >
                <th>
                    Name
                </th>
                <th>
                    Serial number
                </th>
                <th>
                    Status
                </th>
                <th>
                    Description
                </th>
                <th>
                    Owner
                </th>
                <th>
                    Create at
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
    );
};

export default TableHeader;