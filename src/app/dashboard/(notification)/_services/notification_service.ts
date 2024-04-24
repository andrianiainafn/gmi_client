import {httpClient} from "@/lib/axios";


import {IExampleDto} from "@/app/dashboard/user/_services/definition";
import {INotificationToCreate} from "@/app/dashboard/(notification)/_services/definition";
import {NOTIFICATION_ENDPOINTS} from "@/app/dashboard/(notification)/_services/endpoint";

class NotificationService{
    public createNotification(notification: INotificationToCreate){
        return httpClient.post(NOTIFICATION_ENDPOINTS.CREATE,notification)
    }
    public getExampleByExampleId(exampleId: string){
        return httpClient.get(NOTIFICATION_ENDPOINTS.GET.replace("id",exampleId))
    }

    public getAllNotification(){
        return httpClient.get(NOTIFICATION_ENDPOINTS.GET_ALL)
    }
    public updateExample(exampleToUpdate: IExampleDto,id:string){
        return httpClient.put(NOTIFICATION_ENDPOINTS.UPDATE.replace("id",id),exampleToUpdate)
    }
    public deleteExampleByExampleId(exampleId: string){
        return httpClient.get(NOTIFICATION_ENDPOINTS.DELETE.replace("id",exampleId))
    }
}
export const notificationService = new NotificationService()