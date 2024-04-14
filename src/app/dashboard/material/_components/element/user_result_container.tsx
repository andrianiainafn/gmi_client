import React from 'react';
import {IAccount} from "@/app/dashboard/user/_services/definition";
import UserResultItem from "@/app/dashboard/material/_components/element/user_result_item";

interface Props{
    users:IAccount[]
}

const UserResultContainer = (props:Props) => {
    const{users} = props
    return (
        <div className="flex flex-col space-y-2">
            {
                users.map((user:IAccount,key:number)=>(
                    <UserResultItem key={key} account={user}/>
                ))
            }
        </div>
    );
};

export default UserResultContainer;