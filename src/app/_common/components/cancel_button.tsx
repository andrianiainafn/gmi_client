'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
interface Props{
    HandleClickCancel:()=>void
}
const CancelButton = (props:Props) => {
    return (
        <Button variant="secondary" className="h-[6vh] hover:bg-gray-300 "  type="reset" onClick={props.HandleClickCancel}>
            Cancel
        </Button>
    );
};

export default CancelButton;