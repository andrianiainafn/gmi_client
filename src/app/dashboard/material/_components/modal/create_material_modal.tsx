import React from 'react';
import {CgClose} from "react-icons/cg";
import CreateMaterialForm from "@/app/dashboard/material/_components/form/create_material_form";
import {Button} from "@/components/ui/button";

interface Props{
    HandleClickCreate: ()=>void
}

const CreateMaterialModal = (props:Props) => {

    return (
        <div className="overlay" onClick={props.HandleClickCreate}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <div className="flex justify-between items-center text-xl">
                    <h3>Create new Material</h3>
                    <Button variant="ghost" onClick={props.HandleClickCreate}>
                        <CgClose size={24}/>
                    </Button>
                </div>
                <CreateMaterialForm/>
            </div>
        </div>
    );
};

export default CreateMaterialModal;