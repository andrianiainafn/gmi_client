"use client"
import React from 'react';
import {adminLinks, ILink, links} from "@/app/_common/constant/navlink";
import LinkItem from "@/app/dashboard/_components/link_item";
import {useUserStore} from "@/state/global_state";

const LinksContainer = () => {
    const userInfo = useUserStore.use.userInfo()
    return (
        <div className="flex flex-col space-y-4  ">
                {
                   userInfo.roles[0].roleName === "Admin" ? (
                       <>
                           {adminLinks.map((elem:ILink,key:number)=>(
                               <LinkItem key={key} label={elem.label} icon={elem.icon} href={elem.href}/>
                           ))
                           }
                       </>
                    ) : (
                        <>
                            {links.map((elem:ILink,key:number)=>(
                                <LinkItem key={key} label={elem.label} icon={elem.icon} href={elem.href}/>
                            ))
                            }
                        </>
                   )
                }
        </div>
    );
};

export default LinksContainer;