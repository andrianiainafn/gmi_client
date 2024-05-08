"use client"

import {useFetchAllOrganization} from "@/app/dashboard/organization/_hooks/organization_hook";
import OrganizationHeader from "@/app/dashboard/organization/_components/organization_header";
import OrganizationElements from "@/app/dashboard/organization/_components/organization_elements";
import {useOrganizationStore} from "@/app/dashboard/organization/_state/organization_state";
import {useEffect} from "react";


const OrganizationContainer = () => {
    const {data,isSuccess,isLoading}= useFetchAllOrganization()
    const organizations = useOrganizationStore.use.organizations()
    const updateOrganizations = useOrganizationStore.use.updateOrganization()
    useEffect(() => {
        if(isSuccess){
            updateOrganizations(data.data)
        }

    }, [isLoading]);
    return (
        <div className="flex flex-col space-y-4">
            {
                isSuccess && (
                    <>
                        <OrganizationHeader />
                        <OrganizationElements  organizationId={data.data[0].organizationId}/>
                    </>
                )

            }
        </div>
    );
};

export default OrganizationContainer;