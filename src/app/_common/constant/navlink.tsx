import {BrickWall, GitPullRequest, LayoutDashboard, Users} from "lucide-react";
import { GiOrganigram } from "react-icons/gi";
import { TbFileReport } from "react-icons/tb";
import {ReactNode} from "react";
export interface ILink{
    label:string
    icon:ReactNode
    href:string
}
export const links:ILink[] = [
    {
        label: "Dashboard",
        icon: <LayoutDashboard size={24} />,
        href:"/dashboard"
    },
    {
        label: "Departments",
        icon: <GiOrganigram size={24}/>,
        href:"/dashboard/department"
    },
    {
        label: "Materials",
        icon: <BrickWall size={24} />,
        href:"/dashboard/material?filter=All"
    },
    {
        label: "Requests",
        icon: <GitPullRequest  size={24}/>,
        href:"/dashboard/request?priority=All"
    },
    {
        label: "Reports",
        icon: <TbFileReport size={24}/>,
        href:"/dashboard/report"
    },
    {
        label: "Users",
        icon: <Users size={24}/>,
        href:"/dashboard/user"
    },
]
