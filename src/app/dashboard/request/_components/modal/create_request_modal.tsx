import React from 'react';
import CreateRequestFrom from "@/app/dashboard/request/_components/form/create_request_from";
import {Button} from "@/components/ui/button";
import {CgClose} from "react-icons/cg";
import ModalTitle from "@/app/_common/components/modal_title";

interface  Props{
    HandleClick:()=>void
}

const CreateRequestModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <ModalTitle HandleClick={props.HandleClick} label="Request for new material"/>
                <CreateRequestFrom HandleClickCancel={props.HandleClick}/>
            </div>
        </div>
    );
};

export default CreateRequestModal;