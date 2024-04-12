import React from 'react';
import CreateMaterialForm from "@/app/dashboard/material/_components/form/create_material_form";
import ModalTitle from "@/app/_common/components/modal_title";

interface Props{
    HandleClickCreate: ()=>void
}

const CreateMaterialModal = (props:Props) => {

    return (
        <div className="overlay" onClick={props.HandleClickCreate}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={props.HandleClickCreate} label="Create new material"/>
                <CreateMaterialForm HandleClickCancel={props.HandleClickCreate}/>
            </div>
        </div>
    );
};

export default CreateMaterialModal;