export interface IExampleDto{
    message: string
}
export interface IRequest {
    requestId:     string;
    description:   string;
    materialName:  string;
    actualStatus:  string;
    requestStatus: string;
    account:       null;
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