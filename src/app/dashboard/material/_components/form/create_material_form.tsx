import React from 'react';
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";

interface IFormInput{
    name:string,
    description:string,
    statusId:string,
    serialNumber:string
}

const CreateMaterialForm = () => {
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    return (
        <form>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design'>Name</label>
                <input type='text'  placeholder='Ex: Cable Rj45'
                       className='outline-none p-2 border '  />
                <label htmlFor='design'>Serial number</label>
                <input type='text'  placeholder='Ex: Cable Rj45'
                       className='outline-none p-2 border '  />
                <label htmlFor='design'>Description</label>
                <textarea   placeholder='Ex: Cable Rj45'
                       className='outline-none p-2 border '  />
                <Button className="bg-teal-500" >
                    Create material
                </Button>
                <Button variant="secondary">
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default CreateMaterialForm;