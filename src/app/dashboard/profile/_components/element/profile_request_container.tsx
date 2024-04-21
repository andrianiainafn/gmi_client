import React from 'react';
import {IRequest} from "@/app/dashboard/request/_services/definition";
import RequestItem from "@/app/dashboard/request/_components/elements/request_item";

interface Props{
    requests: IRequest[]
}

const ProfileRequestContainer = (props:Props) => {
    return (
        <div>
            {
                props.requests.map((elem:IRequest,key:number)=>(
                    <RequestItem key={key} requestId={elem.requestId} description={elem.description} materialName={elem.materialName} actualPriority={elem.actualPriority} requestStatus={elem.requestStatus} createdAt={elem.createdAt} account={elem.account}/>
                ))
            }
        </div>
    );
};

export default ProfileRequestContainer;