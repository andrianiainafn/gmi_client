"use client"
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {useDeleteMaterial} from "@/app/dashboard/material/_hooks/material_hook";
import {ToastAction} from "@/components/ui/toast";
import {useToast} from "@/components/ui/use-toast";
import {IMaterial} from "@/app/dashboard/material/_services/definition";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";

interface Props{
    HandleClickCancel:()=>void
    material:IMaterial
}

const DeleteDialogue = (props:Props) => {
    const materials = useMaterialStore.use.material()
    const updateMaterials = useMaterialStore.use.updateMaterial()
    const { toast } = useToast()
    const {mutate,isSuccess, isLoading} = useDeleteMaterial()
    const {HandleClickCancel,material}= props
    const HandleClickContinue = ()=>{
        mutate(material.materialId)
    }
    useEffect(() => {
        if(isSuccess){
            const index = materials.findIndex(objet => objet.materialId === material.materialId);
            materials.splice(index, 1);
            updateMaterials([...materials])
            toast({
                title: "Delete material ",
                description: "Material has been deleted successfully",
                variant: "success",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        }
    }, [isSuccess]);
    return (
        <div className="overlay" >
            <div className="central flex flex-col space-y-4 p-4" onClick={(e)=>e.stopPropagation()}>
                <h3 className="font-bold text-[1.2em]">
                    Are you absolutely sure ?
                </h3>
                <p className=" opacity-70 text-[0.9em]">
                    This action cannot be undone. This will permanently delete your material and remove your data from our servers.
                </p>
                <div className="flex justify-end space-x-2 items-center">
                    <Button variant="secondary" onClick={HandleClickCancel}>
                        Cancel
                    </Button>
                    <Button variant="default" onClick={HandleClickContinue}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeleteDialogue;