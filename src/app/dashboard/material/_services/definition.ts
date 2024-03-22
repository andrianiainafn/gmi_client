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
    account:        null;
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