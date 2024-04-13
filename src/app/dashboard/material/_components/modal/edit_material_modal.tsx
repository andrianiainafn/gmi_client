import React from 'react';
import ModalTitle from "@/app/_common/components/modal_title";
import EditMaterialForm from "@/app/dashboard/material/_components/form/edit_material_form";
import {IMaterial} from "@/app/dashboard/material/_services/definition";

interface Props{
    HandleClickCreate: ()=>void,
    material:IMaterial
}

const EditMaterialModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClickCreate}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={props.HandleClickCreate} label="Edit material"/>
                <EditMaterialForm HandleClickCreate={props.HandleClickCreate} material={props.material}/>
            </div>
        </div>
    );
};

export default EditMaterialModal;