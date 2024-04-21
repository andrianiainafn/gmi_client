import {useMutation, useQuery, useQueryClient} from "react-query";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IAccountToCreate, IExampleDto} from "@/app/dashboard/user/_services/definition";
import {userService} from "@/app/dashboard/user/_services/user_service";

export  const useCreateUser= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create-user'],
            mutationFn: (user:IAccountToCreate)=> userService.createAccount(user),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['departments'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}
export const useFetchUserByNameOrEmail = (emailOrName:string) =>{
    return useQuery({
        queryKey:['user-email-name'],
        queryFn:()=> userService.searchUser(emailOrName)
    })
}

export const useFetchUserInfo = () =>{
    return useQuery({
        queryKey:['user-info'],
        queryFn:()=> userService.getUserInfo()
    })
}

export const useFetchAllUser =(page:number,size:number)=>{
    return useQuery({
        queryKey:['users'],
        queryFn:()=> userService.getAllUser(page,size)
    })
}

export const useFetchRoles =(page:number,size:number)=>{
    return useQuery({
        queryKey:['roles'],
        queryFn:()=> userService.getRoles()
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