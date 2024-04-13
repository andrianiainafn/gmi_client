import {IAccount} from "@/app/dashboard/user/_services/definition";

export interface IExampleDto{
    message: string
}
export interface IMaterialCreate {
    materialName: string;
    serialNumber: string;
    description:  string;
    statusId:     string;
    state:        string;
}
export interface IMaterial {
    materialId:     string;
    materialName:   string;
    serialNumber:   string;
    description:    string;
    actualStatus:   string;
    state:          string;
    account:        IAccount[];
    materialStatus: IMaterialStatus;
    histories:      any[];
    createdAt:      null;
    updatedAt:      null;
}

export interface IMaterialStatus {
    materialStatusId:   string;
    materialStatusName: string;
    createdAt:          Date;
    updatedAt:          Date;
}

export interface IEditMaterial {
    materialId:     string;
    materialName:   string;
    serialNumber:   string;
    description:    string;
    statusId:     string;
    state:          string;
    accountId:       string[];
}