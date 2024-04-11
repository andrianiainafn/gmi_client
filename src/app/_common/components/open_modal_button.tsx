import React, { useState} from 'react';
import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";

interface Props{
    label:string,
    Modal: React.ReactElement;
    HandleClickCreate: () => void;
    isCreate:boolean
}

const OpenModalButton = (props:Props) => {
    const{label,Modal,isCreate,HandleClickCreate} = props

    return (
        <>
            {
                isCreate && (
                    <>
                        {
                            React.cloneElement(Modal,HandleClickCreate)
                        }
                    </>
                )
            }
            <div className="flex justify-end">
                <Button onClick={HandleClickCreate} variant="secondary" className="flex items-center space-x-2 py-2" >
                    <span>{label}</span>
                    <CirclePlus size={16} />
                </Button>
            </div>
        </>
    );
};

export default OpenModalButton;