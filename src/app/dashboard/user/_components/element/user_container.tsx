"use client"
import React, {useEffect, useState} from 'react';
import {useFetchAllUser} from "@/app/dashboard/user/_hooks/user_hook";
import UserCard from "@/app/dashboard/user/_components/element/user_card";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import {useUserSectionStore} from "@/app/dashboard/user/state/user_state";


const UserContainer = () => {
    const {data,isSuccess} = useFetchAllUser(0,5)
    const [selectedUser,setSelectedUser] = useState<string[]>([])
    const updateUsers = useUserSectionStore.use.updateUsers()
    const users = useUserSectionStore.use.users()
    const updateUserSelected = (newUserSelected:string[])=>{
        setSelectedUser(newUserSelected)
        console.log(newUserSelected)
        console.log(selectedUser)
    }
    useEffect(() => {
        if (isSuccess){
            updateUsers(data.data.users)
        }
    }, [isSuccess]);
    return (
        <div className="grid gap-2 grid-cols-3">
            {
                isSuccess && (
                    users.map((user:IAccount,key:number)=>(
                        <UserCard user={user} key={key} updateUserSelected={updateUserSelected} userSelected={selectedUser}/>
                    ))
                )
            }
        </div>
    );
};

export default UserContainer;