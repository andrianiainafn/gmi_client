"use client"
import React, {useState} from 'react';
import OpenModalButton from "@/app/_common/components/open_modal_button";
import CreateRequestModal from "@/app/dashboard/request/_components/modal/create_request_modal";

const CreateRequestButton = () => {
    const [isCreate,setIsCreate] = useState<boolean>(false)
    const HandleCLickIsCreate = ()=>{
        setIsCreate(prev=>!prev)
    }
    return (
        <div>
            <OpenModalButton  Modal={<CreateRequestModal HandleClick={HandleCLickIsCreate}/>} label="Create Request" HandleClickCreate={HandleCLickIsCreate} isCreate={isCreate}/>
        </div>
    );
};

export default CreateRequestButton;