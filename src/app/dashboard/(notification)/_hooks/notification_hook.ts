import {useMutation, useQuery, useQueryClient} from "react-query";
import {exampleService} from "@/app/feat-exemple/_services/exemple_service";
import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {notificationService} from "@/app/dashboard/(notification)/_services/notification_service";
import {INotificationToCreate} from "@/app/dashboard/(notification)/_services/definition";

export  const useCreateNotification= ()=>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create-notification'],
                mutationFn: (notification:INotificationToCreate)=> notificationService.createNotification(notification),
            onSuccess: async ()=>{
                await queryClient.resetQueries(['example'])
                await queryClient.invalidateQueries(['example'])
            }
        }
    )
}


export const useFetchNotificationById = (exampleId:string) =>{
    return useQuery({
        queryKey:['example'],
        queryFn:()=> exampleService.getExampleByExampleId(exampleId)
    })
}

export const useFetchAllReportNotification =()=>{
    return useQuery({
        queryKey:['example','notification'],
        queryFn:()=> exampleService.getAllExample()
    })
}

export const useFetchAllRequestNotification =()=>{
    return useQuery({
        queryKey:['request','notification'],
        queryFn:()=> notificationService.getAllNotificationRequest()
    })
}
export const useFetchAllMovementNotification =()=>{
    return useQuery({
        queryKey:['notification','notification'],
        queryFn:()=> exampleService.getAllExample()
    })
}

export const useUpdateNotification=(updateId:string)=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (example: IExampleDto ) => exampleService.updateExample(example,updateId),
        onSuccess:async ()=>{
            await queryClient.invalidateQueries(['notification'])
            await queryClient.resetQueries(['notification'])
        }
    })
}
export const useMarkNotificationRead = ()=>{
   const queryClient = useQueryClient()
   return useMutation({
        mutationKey:["notification-read"],
        mutationFn:(notificationId:string)=>notificationService.markNotificationAsRead(notificationId),
        onSuccess:async ()=>{
            // await queryClient.invalidateQueries(['notification'])
            // await queryClient.resetQueries(['notification'])
        }
    })
}

export const useDeleteNotification = () =>{
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