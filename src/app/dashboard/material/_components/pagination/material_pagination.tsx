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
import {useFetchPageSize} from "@/app/dashboard/material/_hooks/material_hook";


const MaterialPagination = () => {
    const {data,isSuccess} = useFetchPageSize()
    const[page , setPage] = useState<number[]>([])
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
                                    <PaginationItem key={key}>
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