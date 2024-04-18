export interface IExampleDto{
    message: string
}

export interface IDepartment{
    departmentId:   string;
    departmentName: string;
    accounts:       any[];
    createdAt:      Date;
    updatedAt:      Date;
}
export interface IDepartmentCreate{
    departmentName: string
    userId: string[]
}