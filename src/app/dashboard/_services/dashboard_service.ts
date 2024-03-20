import {httpClient} from "@/lib/axios";
import {DASHBOARD_ENDPOINTS} from "@/app/dashboard/_services/endpoint";

class DashboardService{
    public getMaterialStat(){
        return httpClient.get(DASHBOARD_ENDPOINTS.MATERIAL_STATUS_STAT)
    }

    public getRequestStat(){
        return httpClient.get(DASHBOARD_ENDPOINTS.REQUEST_STAT)
    }
    public getRecentMovement(){
        return httpClient.get(DASHBOARD_ENDPOINTS.RECENT_MOVEMENT)
    }
}
export const dashboardService = new DashboardService()