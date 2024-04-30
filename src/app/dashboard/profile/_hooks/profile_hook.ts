import {useMutation, useQuery, useQueryClient} from "react-query";

import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {profileService} from "@/app/dashboard/profile/_services/profile_service";
import {IEditProfile} from "@/app/dashboard/profile/_services/definition";

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
export const useFetchProfile = () =>{
    return useQuery({
        queryKey:['profile'],
        queryFn:()=>profileService.getProfile()
    })
}

export const useFetchAllExample =()=>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> exampleService.getAllExample()
    })
}
export const useUpdateProfileInfo=()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (profileInfo:FormData) => profileService.updatePersonalInfo(profileInfo),
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