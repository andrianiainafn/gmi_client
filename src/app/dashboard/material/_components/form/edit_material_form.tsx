import React, {useEffect, useState} from 'react';
import {IMaterial, IMaterialStatus} from "@/app/dashboard/material/_services/definition";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {useToast} from "@/components/ui/use-toast";
import {SubmitHandler, useForm} from "react-hook-form";
import {ToastAction} from "@/components/ui/toast";
import FieldEmptyAlert from "@/app/_common/components/field_empty_alert";
import CreateButton from "@/app/_common/components/create_button";
import CancelButton from "@/app/_common/components/cancel_button";
import {useFetchAllStatus, useUpdateMaterial} from "@/app/dashboard/material/_hooks/material_hook";
import ActualRequestStatus from "@/app/dashboard/request/_components/form/actual_request_status";
import MaterialStatusForm from "@/app/dashboard/material/_components/element/material_status_form";
import UserList from "@/app/dashboard/material/_components/element/user_list";

interface Props{
    HandleClickCreate: ()=>void,
    material:IMaterial
}
interface IFormInput{
    name:string,
    description:string,
    statusId:string,
    serialNumber:string
}
const EditMaterialForm = (props:Props) => {
    const{material,HandleClickCreate}=props
    const materials = useMaterialStore.use.material()
    const updateMaterial  = useMaterialStore.use.updateMaterial()
    const updateMaterialOwner = useMaterialStore.use.updateMaterialOwners()
    const materialOwner = useMaterialStore.use.materialOwners()
    const [newStatus,setNewStatus] = useState<string>(material.materialStatus.materialStatusId)
    const [error,setError] = useState(false)
    const {data,isLoading,isSuccess,isError} = useFetchAllStatus()
    const {mutate,isLoading:isEditLoading,data:materialData,isSuccess:isEditSuccess} = useUpdateMaterial(material.materialId)
    const { toast } = useToast()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
    } = useForm<IFormInput>({
        defaultValues:{
            name:material.materialName,
            serialNumber:material.serialNumber,
            description:material.description
        }
    })
    updateMaterialOwner(material.accounts)
    const onSubmit: SubmitHandler<IFormInput> = (data)=>{
        const accountId = materialOwner.map(owner=>owner.accountId)
        mutate(
            {
                serialNumber:data.serialNumber,
                description:data.description,
                materialName:data.name,
                materialId:material.materialId,
                statusId:newStatus,
                state:   "AVAILABLE",
                accountId:      accountId
            }
        )
    }
    const HandleClickNewStatus = (newStatus : string)=>{
        setNewStatus(newStatus)
    }
    useEffect(()=>{
        if(isEditSuccess){
            // const updatedMaterial = [materialData?.data,...materials]
            // updateMaterial(updatedMaterial)
            // console.log(updatedMaterial)
            toast({
                title: "Update material ",
                description: "Material has been edited successfully",
                variant: "success",
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        }
    },[isEditSuccess])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5 space-y-2">
                <label htmlFor='name'>Name</label>
                <input type='text'  placeholder='Ex: Cable Rj45' {...register("name",{required:true})}
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.name}/>
                <label htmlFor='serialNumber'>Serial number</label>
                <input type='text'   placeholder='Ex: E3412' {...register("serialNumber",{required:true}) }
                       className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.serialNumber}/>
                <ActualRequestStatus actualRequestStatus={material.actualStatus}/>
                <div className="flex flex-col space-y-2 items-start">
                    <label>
                        Change status to 
                    </label>
                    <div className="flex items-center space-x-2">
                        {
                            data?.data.map((elem:IMaterialStatus,key:number)=>(
                                <MaterialStatusForm key={key} HandleClickNewStatus={HandleClickNewStatus} materialStatusName={elem.materialStatusName} actualStatus={material.actualStatus} materialStatusId={elem.materialStatusId} newStatus={newStatus}/>
                            ))
                        }
                    </div>
                    <FieldEmptyAlert error={error}/>
                </div>
                <FieldEmptyAlert error={errors.statusId}/>
                <label>Owner (hover the avatar to view information)</label>
                <UserList owners={material.accounts}/>
                <label htmlFor='description'>Description</label>
                <textarea   placeholder='Ex: Cable 2m red' {...register("description",{required:true})}
                            className='outline-none p-2 border '  />
                <FieldEmptyAlert error={errors.description}/>
                <CreateButton label="Confirm change" isLoading={isEditLoading}/>
                <CancelButton HandleClickCancel={HandleClickCreate}/>
            </div>
        </form>
    );
};

export default EditMaterialForm;