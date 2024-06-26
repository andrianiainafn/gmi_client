import {useMutation, useQuery, useQueryClient} from "react-query";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {departmentService} from "@/app/dashboard/department/_services/department_service";
import {IDepartmentCreate} from "@/app/dashboard/department/_services/definition";

export  const useCreateDepartment= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create-department'],
            mutationFn: (department:IDepartmentCreate)=> departmentService.createDepartment(department),
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

export const useFetchDepartments =()=>{
    return useQuery({
        queryKey:['departments'],
        queryFn:()=> departmentService.getAllDepartment()
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