import {httpClient} from "@/lib/axios";

import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IAccountToCreate, IExampleDto} from "@/app/dashboard/user/_services/definition";
import {USER_ENDPOINTS} from "@/app/dashboard/user/_services/endpoint";

class UserService{
    public createAccount(user:IAccountToCreate){
        return httpClient.post(USER_ENDPOINTS.CREATE,user)
    }
    public getRoles(){
        return httpClient.get(USER_ENDPOINTS.GET_ROLES)
    }

    public getAllUser(page:number,size:number){
        return httpClient.get(USER_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public searchUser(emailOrName:string){
        console.log(USER_ENDPOINTS.SEARCH.replace("email-or-name",emailOrName))
        return httpClient.get(USER_ENDPOINTS.SEARCH.replace("email-or-name",emailOrName))
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
    public getUserInfo(){
        return httpClient.get(USER_ENDPOINTS.GET_USER_INFO)
    }
}
export const userService = new UserService()