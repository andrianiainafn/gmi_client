import {useMutation, useQuery, useQueryClient} from "react-query";

import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IExampleDto, IRequestToCreate} from "@/app/dashboard/request/_services/definition";
import {requestService} from "@/app/dashboard/request/_services/request_service";

export  const useCreateRequest= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['request-create'],
            mutationFn: (request:IRequestToCreate)=> requestService.createRequest(request),
            onSuccess: async ()=>{
            }
        }
    )
}
export const useFetchExampleById = (exampleId:string) =>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> exampleService.getExampleByExampleId(exampleId)
    })
}
export const useFetchRequest = (priority:string,page:number,size:number)=>{
    return useQuery({
        queryKey:['request'],
        queryFn:()=> requestService.getRequest(priority,page,size)
    })
}
export const useFetchPriority =()=>{
    return useQuery({
        queryKey:['priority'],
        queryFn:()=> requestService.getPriority()
    })
}
export const useUpdateRequestStatus=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (requestStatus: string ) => requestService.updateRequestStatus(requestStatus,updateId),
        onSuccess:async ()=>{
            await queryClient.invalidateQueries(['example'])
            await queryClient.resetQueries(['example'])
        }
    })
}



export const useDeleteExample = () =>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['delete'],
            mutationFn:(exampleId:string)=> exampleService.deleteExampleByExampleId(exampleId),
            onSuccess: async () =>{
                await queryClient.invalidateQueries(['example'])
                await queryClient.resetQueries(['example'])
            }
        }
    )
}