'use client'
import React, {useEffect, useState} from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useFetchPageSize} from "@/app/dashboard/material/_hooks/material_hook";
import { useSearchParams} from "next/navigation";
import PaginationMaterialItem from "@/app/dashboard/material/_components/pagination/pagination_item";


const MaterialPagination = () => {
    const {data,isSuccess} = useFetchPageSize()
    const[page , setPage] = useState<number[]>([])
    const filterParam = useSearchParams()
    const param = filterParam.get('filter')
    useEffect(() => {
        if(isSuccess){
             setPage(Array.from({ length: 3 }, (_, index) => index + 1))
        }
    }, [isSuccess]);

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
                                    <PaginationMaterialItem key={key}  index={key} elem={elem} param={param ? param : 'All'}/>
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