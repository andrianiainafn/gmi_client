"use client"
import React from 'react';
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import {Button} from "@/components/ui/button";
import {CircleX, Pencil, Trash} from "lucide-react";

const TableRow = () => {
    const material = useMaterialStore.use.material()
    return (
        <tbody className="text-center font-light text-sm text-gray-600 ">
            {
                material.map((elem:IMaterial,key:number)=>(
                    <tr key={key} className={`${(key + 1 ) % 2 === 0 ? "bg-gray-100 dark:bg-gray-950" : ""} py-4`}>
                        <td>
                            {elem.materialName}
                        </td>
                        <td >
                            {elem.serialNumber}
                        </td>
                        {
                            elem.actualStatus === "Under Maintenance" && (
                                <td >
                                    <span className="  bg-blue-400 bg-opacity-30 text-blue-500 py-1 px-3 rounded-lg ">
                                        {elem.actualStatus}
                                    </span>
                                </td>
                            )
                        }
                        {
                            elem.actualStatus === "In service" && (
                                <td >
                                    <span className="bg-teal-500 bg-opacity-30 text-teal-700 py-1 px-3 rounded-lg">
                                        {elem.actualStatus}
                                    </span>
                                </td>
                            )
                        }
                        {
                            elem.actualStatus === "Out of service" && (
                                <td >
                                    <span className="bg-red-500 bg-opacity-30 text-red-600 py-1 px-3 rounded-lg">
                                        {elem.actualStatus}
                                    </span>
                                </td>
                            )
                        }
                        <td>
                            {elem.description}
                        </td>
                        <td>
                            {
                                elem.account ? (
                                    <>
                                        {elem.account}
                                    </>
                                ):(
                                    <>
                                        no account associated
                                    </>
                                )
                            }
                        </td>
                        <td>
                            {elem.createdAt}
                        </td>
                        <td className="flex space-x-2 items-center">
                            <Button variant="secondary" className=" flex w-[7vw] items-center space-x-2" >
                                <span>
                                    Edit
                                </span>
                                <Pencil size={16} />
                            </Button>
                            <Button variant="destructive" className="flex items-center space-x-2 w-[7vw]">
                                <span>
                                    Delete
                                </span>
                                <CircleX size={16} />
                            </Button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    );
};

export default TableRow;