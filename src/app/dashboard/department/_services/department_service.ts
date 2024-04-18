import {httpClient} from "@/lib/axios";
import {IDepartmentCreate, IExampleDto} from '@/app/dashboard/department/_services/definition'
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {DEPARTMENT_ENDPOINTS} from "@/app/dashboard/department/_services/endpoint";

class DepartmentService{
    public createDepartment(departmentToCreate: IDepartmentCreate){
        return httpClient.post(DEPARTMENT_ENDPOINTS.CREATE,departmentToCreate)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getAllDepartment(){
        return httpClient.get(DEPARTMENT_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const departmentService = new DepartmentService()