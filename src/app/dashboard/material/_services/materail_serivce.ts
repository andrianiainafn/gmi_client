import {httpClient} from "@/lib/axios";
import {MATERIAL_ENDPOINTS} from "@/app/dashboard/material/_services/endpoint";
import {IEditMaterial, IMaterialCreate} from "@/app/dashboard/material/_services/definition";
import {IAccount} from "@/app/dashboard/user/_services/definition";


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
    public getAllMateriel(status: string, page: number | null, size: number){
        return httpClient.get(`${MATERIAL_ENDPOINTS.GET_ALL}?status=${status}&page=${page}`)
    }
    public updateMaterial(material: IEditMaterial,id:string){
        return httpClient.put(MATERIAL_ENDPOINTS.UPDATE.replace("id",id),material)
    }
    public deleteMaterialId(materialId: string){
        return httpClient.delete(MATERIAL_ENDPOINTS.DELETE.replace("id",materialId))
    }
    public toggleOwner(owner:IAccount[],newOwner:IAccount){
        if (owner.some(account => account.accountId === newOwner.accountId)){
            owner.splice(owner.indexOf(newOwner),1)
        }else{
            owner.push(newOwner)
        }
        return owner
    }
}
export const materialService = new MaterialService()