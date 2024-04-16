import {IDepartment} from "@/app/dashboard/department/_services/definition";

export interface IExampleDto{
    message: string
}
export interface IAccount{
    accountId:  string;
    firstname:  string;
    lastname:   string;
    email:      string;
    profileUrl: string;
    roles:      IRole[];
    department: IDepartment;
    createdAt: Date
}
export interface IRole{
    roleId:    string;
    roleName:  string;
    account:   any[];
    createdAt: Date;
    updatedAt: Date;
}
export interface IAccountToCreate{
    firstname:  string
    lastname:   string
    email:      string
    password:string
    departmentId:string
    rolesId:string[]
}