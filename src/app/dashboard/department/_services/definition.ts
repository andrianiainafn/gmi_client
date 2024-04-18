import {IAccount} from "@/app/dashboard/user/_services/definition";

export interface IExampleDto{
    message: string
}

export interface IDepartment{
    departmentId:   string;
    departmentName: string;
    accounts:       IAccount[];
    createdAt:      Date;
    updatedAt:      Date;
}
export interface IDepartmentCreate{
    departmentName: string
    userId: string[]
}