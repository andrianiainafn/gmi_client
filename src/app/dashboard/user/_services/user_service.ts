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
        return httpClient.get(`${USER_ENDPOINTS.GET_ALL}?size=${size}&page=${page}`)
    }
    public updateUser(user: IAccountToCreate,id:string){
        return httpClient.put(USER_ENDPOINTS.UPDATE.replace("id",id),user)
    }
    public searchUser(emailOrName:string){
        console.log(USER_ENDPOINTS.SEARCH.replace("email-or-name",emailOrName))
        return httpClient.get(USER_ENDPOINTS.SEARCH.replace("email-or-name",emailOrName))
    }
    public deleteUserByUserId(userId: string){
        return httpClient.get(USER_ENDPOINTS.DELETE.replace("id",userId))
    }
    public getUserInfo(){
        return httpClient.get(USER_ENDPOINTS.GET_USER_INFO)
    }
}
export const userService = new UserService()