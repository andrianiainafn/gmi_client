import {httpClient} from "@/lib/axios";
import {MATERIAL_ENDPOINTS} from "@/app/dashboard/material/_services/endpoint";
import {IMaterial, IMaterialCreate} from "@/app/dashboard/material/_services/definition";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";


class MaterialService{
    public createMaterial(material: IMaterialCreate){
        return httpClient.post(MATERIAL_ENDPOINTS.CREATE,material)
    }

    public getAllStatus(){
        return httpClient.get(MATERIAL_ENDPOINTS.GET_STATUS)
    }
    public getMaterialCount(){
        return httpClient.get(MATERIAL_ENDPOINTS.GET_PAGE_SIZE)
    }
    public getAllMateriel(status:string,page:number,size:number){
        return httpClient.get(`${MATERIAL_ENDPOINTS.GET_ALL}?status=${status}`)
    }
    public updateMaterial(material: IMaterialCreate,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),material)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const materialService = new MaterialService()