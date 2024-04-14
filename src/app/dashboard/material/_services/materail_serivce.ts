import {httpClient} from "@/lib/axios";
import {MATERIAL_ENDPOINTS} from "@/app/dashboard/material/_services/endpoint";
import {IEditMaterial, IMaterial, IMaterialCreate} from "@/app/dashboard/material/_services/definition";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IAccount, IExampleDto} from "@/app/dashboard/user/_services/definition";


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
    public updateMaterial(material: IEditMaterial,id:string){
        return httpClient.put(MATERIAL_ENDPOINTS.UPDATE.replace("id",id),material)
    }
    public deleteMaterialId(materialId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",materialId))
    }
    public toggleOwner(owner:IAccount[],newOwner:IAccount){
        if (owner.some(account => account.accountId === newOwner.accountId)){
            owner.splice(owner.indexOf(newOwner),1)
            console.log(owner)
        }else{
            owner.push(newOwner)
            console.log(owner)
        }
        return owner
    }
}
export const materialService = new MaterialService()