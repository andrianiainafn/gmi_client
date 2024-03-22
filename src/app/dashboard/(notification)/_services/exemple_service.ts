import {httpClient} from "@/lib/axios";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {EXAMPLE_ENDPOINTS} from "@/app/feat-exemple/_services/endpoint";

class ExampleService{
    public createExample(exampleToCreate: IExampleDto){
        return httpClient.post(EXAMPLE_ENDPOINTS.CREATE,exampleToCreate)
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
export const exampleService = new ExampleService()