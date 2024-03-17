"use client"
import React from 'react';
import {useSession} from "next-auth/react";

const NavBar = () => {
    const session = useSession()
    return (
        <div>
            {
                session.data && (
                    <>
                        {session.data.user?.email}
                    </>
                )
            }
        </div>
    );
};

export default NavBar;