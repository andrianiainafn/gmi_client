import React from 'react';
import ModalTitle from "@/app/_common/components/modal_title";
import CreateUserForm from "@/app/dashboard/user/_components/form/create_user_form";
import EditUserForm from "@/app/dashboard/user/_components/form/edit_user_form";
import {IAccount} from "@/app/dashboard/user/_services/definition";

interface Props{
    HandleClickCreate:()=>void
    user:IAccount
}

const EditUserModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClickCreate}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={props.HandleClickCreate} label="Create new user"/>
                <EditUserForm HandleClick={props.HandleClickCreate} user={props.user}/>
            </div>
        </div>
    );
};

export default EditUserModal;