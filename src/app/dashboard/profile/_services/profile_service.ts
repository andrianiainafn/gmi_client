import {httpClient} from "@/lib/axios";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {PROFILE_ENDPOINTS} from "@/app/dashboard/profile/_services/endpoint";

class ProfileService{
    public createExample(exampleToCreate: IExampleDto){
        return httpClient.post(EXAMPLE_ENDPOINTS.CREATE,exampleToCreate)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getProfile(){
        return httpClient.get(PROFILE_ENDPOINTS.GET)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const profileService = new ProfileService()