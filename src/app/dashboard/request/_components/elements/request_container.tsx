"use client"
import React from 'react';
import RequestItem from "@/app/dashboard/request/_components/elements/request_item";
import {useRequestStore} from "@/app/dashboard/request/_state/request_state";
import {IRequest} from "@/app/dashboard/request/_services/definition";
import MaterialPagination from "@/app/dashboard/material/_components/pagination/material_pagination";

const RequestContainer = () => {
    const request:IRequest[] = useRequestStore.use.request()
    return (
        <div className="flex justify-between">
            <div className="flex flex-col space-y-4 w-[60%]">
                {
                    request.map((elem:IRequest,key:number)=>(
                        <RequestItem key={key} account={elem.account!} actualPriority={elem.actualPriority} description={elem.description}
                                     materialName={elem.materialName} requestId={elem.requestId} requestStatus={elem.requestStatus} createdAt={elem.createdAt}/>
                    ))
                }
                <MaterialPagination/>
            </div>
            <div className="w-[35%]">

            </div>
        </div>
    );
};

export default RequestContainer;