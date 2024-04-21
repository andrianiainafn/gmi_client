import React from 'react';
import {PaginationItem, PaginationLink} from "@/components/ui/pagination";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useUserStore} from "@/state/global_state";
import {useFetchAllMaterial} from "@/app/dashboard/material/_hooks/material_hook";

interface Props{
    index:number
    elem:number
    param:string
}

const PaginationMaterialItem = (props:Props) => {
    const {index,elem,param} = props
    const pathname = usePathname();
    const { replace } = useRouter();
    const filterParam = useSearchParams()
    const page = filterParam.get('page')
    const refetchMaterial = useUserStore.use.refetchMaterial()
    const updateRefetchMaterial = useUserStore.use.updateRefetchMaterial()
    const {refetch} = useFetchAllMaterial(param,Number(index),5)
    const HandleClickPage=async(key:number)=> {
        const params = new URLSearchParams(filterParam);
        params.set('page', key.toString());
        replace(`${pathname}?${params.toString()}`);
        await refetch()
        updateRefetchMaterial(!refetchMaterial)
    }
    return (
        <>
            <PaginationItem onClick={()=>HandleClickPage(index)} className={Number(page) === index ? 'text-teal-500' : ''}  >
                <PaginationLink href="#">{elem}</PaginationLink>
            </PaginationItem>
        </>
    );
};

export default PaginationMaterialItem;