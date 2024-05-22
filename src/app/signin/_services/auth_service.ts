import {httpClient} from "@/lib/axios";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {ISigninAccount} from "@/app/signin/_services/definition";
import {AUTH_ENDPOINTS} from "@/app/signin/_services/endpoint";

class AuthService{
    public createAccount(account: ISigninAccount){
        return httpClient.post(AUTH_ENDPOINTS.CREATE,account)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getAllExample(){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const authService = new AuthService()