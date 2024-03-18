import {useMutation, useQuery, useQueryClient} from "react-query";
import {IExampleDto} from "@/app/feat-exemple/_services/definition";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";

export  const useCreateExample= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['example'],
            mutationFn: (exampleToCreate:IExampleDto)=> exampleService.createExample(exampleToCreate),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
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

export const useFetchAllExample =()=>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> exampleService.getAllExample()
    })
}
export const useUpdateExample=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (example: IExampleDto ) => exampleService.updateExample(example,updateId),
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