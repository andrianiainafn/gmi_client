"use client"
import React from 'react';
import ModalTitle from "@/app/_common/components/modal_title";
import CreateUserForm from "@/app/dashboard/user/_components/form/create_user_form";

interface Props{
    HandleClickCreate:()=>void
}

const CreateUserModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClickCreate}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={props.HandleClickCreate} label="Create new user"/>
                <CreateUserForm HandleClick={props.HandleClickCreate}/>
            </div>
        </div>
    );
};

export default CreateUserModal;