import {httpClient} from "@/lib/axios";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IRequestToCreate} from "@/app/dashboard/request/_services/definition";
import {REQUEST_ENDPOINTS} from "@/app/dashboard/request/_services/endpoint";

class RequestService{
    public createRequest(request: IRequestToCreate){
        return httpClient.post(REQUEST_ENDPOINTS.CREATE,request)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getAllExample(){
        return httpClient.get(EXAMPLE_ENDPOINTS.GET_ALL)
    }
    public getPriority(){
        return httpClient.get(REQUEST_ENDPOINTS.GET_PRIORITY)
    }
    public updateRequestStatus(requestStatus:string,id:string){
        return httpClient.put(REQUEST_ENDPOINTS.UPDATE.replace("id",id),{requestStatus:requestStatus})
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }

    public getRequest(priority:string,page:number,size:number) {
        return httpClient.get(`${REQUEST_ENDPOINTS.GET_ALL}?priority=${priority}&page=${page}`);
    }
}
export const requestService = new RequestService()