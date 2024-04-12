import React from 'react';
import {CircleAlert} from "lucide-react";
import {FieldError} from "react-hook-form";

interface Props{
    error:boolean | undefined | FieldError
}

const FieldEmptyAlert = (props:Props) => {
    return (
        <>
            { props.error  &&
                <div className="flex space-x-2 items-center text-red-600">
                    <CircleAlert size={18}  />
                    <span > This field is required</span>
                </div>
            }
        </>
    );
};

export default FieldEmptyAlert;