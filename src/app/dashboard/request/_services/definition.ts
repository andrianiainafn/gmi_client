import {IAccount} from "@/app/dashboard/user/_services/definition";

export interface IExampleDto{
    message: string
}
export interface IRequest {
    requestId:     string;
    description:   string;
    materialName:  string;
    actualPriority:  string;
    requestStatus: string;
    account:       IAccount;
    priority:      IPriority;
    createdAt:     Date;
    updatedAt:     Date;
}
export interface IPriority{
    priorityId:string,
    priorityDesignation:string
    request:[]
}

export interface IRequestToCreate{
     materialName:string;
     description:string;
     priorityId:string;
}