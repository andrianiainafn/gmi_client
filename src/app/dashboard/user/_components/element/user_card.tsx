import React, {ChangeEvent, useEffect, useState} from 'react';
import {IAccount, IRole} from "@/app/dashboard/user/_services/definition";
import {CircleX, EllipsisVertical, Pencil} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {formatDate, formatDateToMdy} from "@/app/_common/util";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

interface Props{
    user:IAccount,
    updateUserSelected:(newUserSelected:string[])=>void
    userSelected:string[]
}

const UserCard = (props:Props) => {
    const{user,updateUserSelected,userSelected} = props
    const [isChecked,setIsChecked] = useState<boolean>(false)
    const HandleCheck = ()=>{
        setIsChecked(prev=>!prev)
    }
    useEffect(() => {
        if(isChecked){
            userSelected.push(user.accountId)
        }else{
            userSelected.splice(userSelected.indexOf(user.accountId),1)
        }
        updateUserSelected(userSelected)
    }, [isChecked]);
    return (
        <div className="flex flex-col space-y-4 p-4  shadow-sm border border-gray-100">
            <div className="flex-col items-center text-center  space-y-1 ">
                <div className="flex justify-center">
                    <Avatar className="w-24 h-24 " >
                        <AvatarImage src={user.profileUrl} />
                        <AvatarFallback>
                            {user.firstname.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <h2 className="text-teal-500 font-semibold text-xl">
                    {`${user.firstname} ${user.lastname}`}
                </h2>
                <h3 className="text-gray-500">
                    {user.email}
                </h3>
                <h3 className="text-gray-500">
                    {
                        user.roles.map((role:IRole,key:number)=>(
                            <>
                                {
                                    key !== 0 ? (
                                        <span key={key}> / {role.roleName}</span>
                                    ):(
                                        <span key={key}>{role.roleName}</span>
                                    )
                                }
                            </>
                        ))
                    }
                </h3>
                <h3 className="text-gray-500">
                    Department of {user.department.departmentName}
                </h3>
            </div>
            <div className="flex flex-col text-gray-500 text-sm">
                <p>Account created  {formatDateToMdy(user.createdAt)}</p>
            </div>
           <div className="flex justify-end space-x-2 items-center">
               <Button  variant="secondary" className=" flex w-[7vw] items-center space-x-2" >
                            <span>
                                Edit
                            </span>
                   <Pencil size={16} />
               </Button>
               <Button variant="destructive" className="flex items-center space-x-2 w-[7vw]">
                            <span>
                                Delete
                            </span>
                   <CircleX size={16} />
               </Button>
           </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={userSelected.includes(user.accountId)} onCheckedChange={HandleCheck}/>
                <label
                    htmlFor="terms"
                    className="text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    select this user
                </label>
            </div>
        </div>
    );
};

export default UserCard;