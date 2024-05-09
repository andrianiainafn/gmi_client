import {useMutation, useQuery, useQueryClient} from "react-query";

import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {IOrganizationToCreate} from "@/app/dashboard/organization/_services/definition";
import {organizationService} from "@/app/dashboard/organization/_services/organization_service";

export  const useCreateOrganization= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['organization-create'],
            mutationFn: (organization:IOrganizationToCreate)=> organizationService.createOrganization(organization),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}

export  const useCreateRole= (organizationId:string)=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['role-create'],
            mutationFn: (roleName:string)=> organizationService.createRole(organizationId,roleName),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}

export const useFetchRoleOfOrganization = (organizationId:string) =>{
    return useQuery({
        queryKey:['role-organization'],
        queryFn:()=> organizationService.getRoleOfOrganization(organizationId)
    })
}

export const useFetchAllOrganization =()=>{
    return useQuery({
        queryKey:['organizations'],
        queryFn:()=> organizationService.getOrganization()
    })
}
export const useUpdateOrganizationName=(organizationId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (organizationName:string ) => organizationService.editOrganizationName(organizationId,organizationName),
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