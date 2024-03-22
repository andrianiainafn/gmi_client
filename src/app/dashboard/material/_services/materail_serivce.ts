import {httpClient} from "@/lib/axios";
import {MATERIAL_ENDPOINTS} from "@/app/dashboard/material/_services/endpoint";
import {IMaterialCreate} from "@/app/dashboard/material/_services/definition";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";


class MaterialService{
    public createExample(material: IMaterialCreate){
        return httpClient.post(MATERIAL_ENDPOINTS.CREATE,material)
    }

    public getAllStatus(){
        return httpClient.get(MATERIAL_ENDPOINTS.GET_STATUS)
    }
    public getAllMateriel(status:string,page:number,size:number){
        return httpClient.get(`${MATERIAL_ENDPOINTS.GET_ALL}?status=${status}`)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const materialService = new MaterialService()