export interface IOrganizationToCreate {
    organizationName: string
}
export interface Organization{
    organizationName:string
    organizationId:string
    organizationLogo:string
    organizationDescription:string
    createdAt:Date
    updatedAt:Date
}