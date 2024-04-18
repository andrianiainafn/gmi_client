import React from 'react';
import ModalTitle from "@/app/_common/components/modal_title";
import CreateDepartmentForm from "@/app/dashboard/department/_components/form/create_department_form";

interface Props{
    HandleClickCreate:()=>void
}

const CreateDepartmentModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClickCreate}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.preventDefault()}>
                <ModalTitle HandleClick={props.HandleClickCreate} label="Create new Department"/>
                <CreateDepartmentForm HandleClickCancel={props.HandleClickCreate}/>
            </div>
        </div>
    );
};

export default CreateDepartmentModal;