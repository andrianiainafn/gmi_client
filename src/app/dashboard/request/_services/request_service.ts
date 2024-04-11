import {httpClient} from "@/lib/axios";

import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";
import {IExampleDto, IRequestToCreate} from "@/app/dashboard/request/_services/definition";
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
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(EXAMPLE_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(EXAMPLE_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const requestService = new RequestService()