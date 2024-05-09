import {httpClient} from "@/lib/axios";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {IOrganizationToCreate} from "@/app/dashboard/organization/_services/definition";
import {ORGANIZATION_ENDPOINTS} from "@/app/dashboard/organization/_services/endpoint";

class OrganizationService{
    public createOrganization(organization: IOrganizationToCreate){
        return httpClient.post(ORGANIZATION_ENDPOINTS.CREATE,organization)
    }
    public getRoleOfOrganization(organizationId: string){
        return httpClient.get(ORGANIZATION_ENDPOINTS.GET_ROLE.replace("id",organizationId))
    }

    public getOrganization(){
        return httpClient.get(ORGANIZATION_ENDPOINTS.GET_ALL)
    }
    public editOrganizationName(organizationId:string,organizationName:string){
        return httpClient.put(ORGANIZATION_ENDPOINTS.UPDATE.replace("id",organizationId),{organizationName})
    }
    public createRole(organizationId:string,roleName:string){
        return httpClient.post(ORGANIZATION_ENDPOINTS.CREATE_ROLE.replace("id",organizationId),{roleName})
    }

    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const organizationService = new OrganizationService()