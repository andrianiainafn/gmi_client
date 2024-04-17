import {IAccount} from "@/app/dashboard/user/_services/definition";
import {IRequest} from "@/app/dashboard/request/_services/definition";

export interface IProfile {
    accountInfoResponseDto: IAccount;
    requests:               IRequest[];
    maintenanceRequests:    null;
}