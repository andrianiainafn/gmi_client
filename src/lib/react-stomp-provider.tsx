'use client'
import React from "react";
import {dehydrate, Hydrate, QueryClientProvider} from "react-query";
import {queryClient} from "@/lib/query_client";
import {ReactQueryDevtools} from "react-query/devtools";
import {StompSessionProvider} from "react-stomp-hooks";


export default  function ReactStompProvider({children ,}: {
    children: React.ReactNode
}) {
    return (
        <StompSessionProvider url={'http://localhost:8888/ws-endpoint/'} >
                {children}
        </StompSessionProvider>

    )
}
