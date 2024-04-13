import {useMutation, useQuery, useQueryClient} from "react-query";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IEditMaterial, IMaterialCreate} from "@/app/dashboard/material/_services/definition";
import {materialService} from "@/app/dashboard/material/_services/materail_serivce";

export  const useCreateMaterial= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['material'],
            mutationFn: (material:IMaterialCreate)=> materialService.createMaterial(material),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}
export const useFetchMaterialById = (materialId:string) =>{
    return useQuery({
        queryKey:['material',materialId],
        queryFn:()=> exampleService.getExampleByExampleId(materialId)
    })
}

export const useFetchAllMaterial =(status:string,page:number,size:number)=>{
    return useQuery({
        queryKey:['materials'],
        queryFn:()=> materialService.getAllMateriel(status,page,size)
    })
}

export const useFetchPageSize = ()=>{
    return useQuery(
        {
            queryKey:["page_size"],
            queryFn:()=>materialService.getMaterialCount()
        }
    )
}

export const useFetchAllStatus =()=>{
    return useQuery({
        queryKey:['statuses'],
        queryFn:()=> materialService.getAllStatus()
    })
}

export const useUpdateMaterial=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (material: IEditMaterial ) => materialService.updateMaterial(material,updateId),
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