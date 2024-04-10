export interface IExampleDto{
    message: string
}
export interface IRequest {
    requestId:     string;
    description:   string;
    materialName:  string;
    actualStatus:  null;
    requestStatus: string;
    account:       null;
    priority:      null;
    createdAt:     Date;
    updatedAt:     Date;
}
export interface IPriority{
    priorityId:string,
    priorityDesignation:string
}