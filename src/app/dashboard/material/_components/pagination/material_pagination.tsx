'use client'
import React, {useEffect, useState} from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {useFetchAllMaterial, useFetchPageSize} from "@/app/dashboard/material/_hooks/material_hook";
import {useMaterialStore} from "@/app/dashboard/material/_state/material_state";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


const MaterialPagination = () => {
    const {data,isSuccess} = useFetchPageSize()
    const[page , setPage] = useState<number[]>([])
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    useEffect(() => {
        if(isSuccess){
             setPage(Array.from({ length: 3 }, (_, index) => index + 1))
        }
    }, [isSuccess]);
    const HandleClickPage=async(key:number)=> {
        const params = new URLSearchParams(searchParams);
        params.set('page', key.toString());
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                {
                    isSuccess && (
                        <>
                            {
                                page.map((elem,key)=>(
                                    <PaginationItem key={key} onClick={()=>HandleClickPage(key)}>
                                        <PaginationLink href="#">{elem}</PaginationLink>
                                    </PaginationItem>
                                ))
                            }
                        </>
                    )
                }
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default MaterialPagination;