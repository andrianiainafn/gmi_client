import React from 'react';
import CreateRequestFrom from "@/app/dashboard/request/_components/form/create_request_from";
import {Button} from "@/components/ui/button";
import {CgClose} from "react-icons/cg";

interface  Props{
    HandleClick:()=>void
}

const CreateRequestModal = (props:Props) => {
    return (
        <div className="overlay" onClick={props.HandleClick}>
            <div className="central flex flex-col space-y-3 p-3" onClick={(e)=>e.stopPropagation()}>
                <div className="flex justify-between items-center text-xl">
                    <h3>Request for new material</h3>
                    <Button variant="ghost" onClick={props.HandleClick}>
                        <CgClose size={24}/>
                    </Button>
                </div>
                <CreateRequestFrom HandleClickCancel={props.HandleClick}/>
            </div>
        </div>
    );
};

export default CreateRequestModal;