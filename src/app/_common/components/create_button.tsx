'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";


interface Props{
    label:string,
    isLoading:boolean
}

const CreateButton = (props:Props) => {
    return (
        <Button disabled={props.isLoading} className="bg-teal-500 h-[6vh] flex items-center space-x-2" type="submit" >
            {
                props.isLoading && (
                    <Loader2  className="mr-2 h-4 w-4 animate-spin" />
                )
            }
            <span>
                Create {props.label}
            </span>
        </Button>
    );
};

export default CreateButton;