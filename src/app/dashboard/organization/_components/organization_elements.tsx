import React from 'react';
import {useFetchRoles} from "@/app/dashboard/user/_hooks/user_hook";
import {useFetchRoleOfOrganization} from "@/app/dashboard/organization/_hooks/organization_hook";
interface Props {
    organizationId:string
}

const OrganizationElements = (props:Props) => {
    const {isSuccess}= useFetchRoleOfOrganization(props.organizationId)
    return (
        <div className="flex flex-col space-y-3">
            <h3 className="text-xl">The roles present in the organization</h3>
            <div className=" flex flex-col">
            {
                isSuccess && (
                    <div className=''>
                            
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default OrganizationElements;