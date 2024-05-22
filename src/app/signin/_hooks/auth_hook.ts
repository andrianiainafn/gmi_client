import {useMutation,  useQueryClient} from "react-query";
import {ISigninAccount} from "@/app/signin/_services/definition";
import {authService} from "@/app/signin/_services/auth_service";

export  const useCreateAccount= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['siginin'],
            mutationFn: (account:ISigninAccount)=> authService.createAccount(account),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}