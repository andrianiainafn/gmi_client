import {IAccount} from "@/app/dashboard/user/_services/definition";
import {IDepartment} from "@/app/dashboard/department/_services/definition";

export interface INotificationToCreate{
    accountConcerned: string[]
    notificationType:string
}

export interface INotification {
    notificationId:   string;
    notificationType: string;
    account:          IAccount;
    newDepartment:    IDepartment;
    lastDepartment:   IDepartment;
    createdAt:        Date;
    updatedAt:        Date;
    read:             boolean;
}