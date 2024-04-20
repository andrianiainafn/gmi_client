import React, {useEffect, useState} from 'react';
import {Search} from "lucide-react";
import ModalTitle from "@/app/_common/components/modal_title";
import {useFetchUserByNameOrEmail} from "@/app/dashboard/user/_hooks/user_hook";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import UserItem from "@/app/dashboard/department/_components/element/user_item";
import UserResultContainer from "@/app/dashboard/department/_components/element/user_result_container";
import UserResultSkeleton from "@/app/dashboard/material/_components/skeleton/user_result_skeleton";
import {useDepartmentStore} from "@/app/dashboard/department/state/department_state";

interface Props{
    HandleClickChange:()=>void,
}
const ChangeMemberModal = (props:Props) => {
    const members = useDepartmentStore.use.members()
    const [query,setQuery] = useState<string>("")
    const {isLoading,isSuccess,data,refetch} = useFetchUserByNameOrEmail(query)
    const {HandleClickChange}=props
    const HandleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
        refetch()
    }
    return (
        <div className="overlay-owner" onClick={HandleClickChange}>
            <div className="central-owner p-2 flex flex-col space-y-3" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={HandleClickChange} label="Add members"/>
                <label>Actual member</label>
                <div className="flex items-center justify-start flex-wrap space-y-2 space-x-2">
                    {
                        members.length === 0 ? (
                            <>
                            </>
                        ):(
                            <>
                                {
                                    members.map((owner:IAccount,key:number)=>(
                                        <UserItem user={owner} key={key}/>
                                    ))
                                }
                            </>
                        )
                    }
                </div>
                <label>Search to new member </label>
                <div className="flex border justify-between border-gray-200 dark:border-gray-500 items-center py-2 px-2 ">
                    <input value={query} onChange={HandleInputChange} placeholder="Search..." className="outline-none bg-none bg-transparent" />
                    <Search className="flex flex-en text-gray-200"/>
                </div>
                {
                    isLoading && (
                        <UserResultSkeleton/>
                    )
                }
                {
                    isSuccess && (
                        <UserResultContainer users={data.data}/>
                    )
                }
            </div>
        </div>
    );
};

export default ChangeMemberModal;