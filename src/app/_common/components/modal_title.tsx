"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import {CgClose} from "react-icons/cg";

interface Props{
    HandleClick:()=>void
    label:string
}

const ModalTitle = (props:Props) => {
    const{HandleClick,label}=props
    return (
        <div className="flex justify-between items-center text-xl">
            <h3>{label}</h3>
            <Button variant="ghost" onClick={HandleClick}>
                <CgClose size={24}/>
            </Button>
        </div>
    );
};

export default ModalTitle;