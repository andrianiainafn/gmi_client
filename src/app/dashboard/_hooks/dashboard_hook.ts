import {useQuery} from "react-query";
import {dashboardService} from "@/app/dashboard/_services/dashboard_service";

export const useFetchRequestStat = () =>{
    return useQuery({
        queryKey:['request','stat'],
        queryFn:()=> dashboardService.getRequestStat()
    })
}

export const useFetchMaterialStat =()=>{
    return useQuery({
        queryKey:['material','stat'],
        queryFn:()=> dashboardService.getMaterialStat()
    })
}

export const useFetchRecentMovement =()=>{
    return useQuery({
        queryKey:['movement','recent'],
        queryFn:()=> dashboardService.getRecentMovement()
    })
}