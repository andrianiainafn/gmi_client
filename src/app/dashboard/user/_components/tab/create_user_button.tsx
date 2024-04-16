"use client"
import React, {useState} from 'react';
import OpenModalButton from "@/app/_common/components/open_modal_button";
import CreateUserModal from "@/app/dashboard/user/_components/modal/create_user_modal";

const CreateUserButton = () => {
    const [isCreate,setIsCreate] = useState<boolean>(false)
    const HandleClickCreate = ()=>{
        setIsCreate(prev=>!prev)
    }
    return (
        <div>
            <OpenModalButton label="Add new user" Modal={<CreateUserModal HandleClickCreate={HandleClickCreate}/>} HandleClickCreate={HandleClickCreate} isCreate={isCreate}/>
        </div>
    );
};

export default CreateUserButton;