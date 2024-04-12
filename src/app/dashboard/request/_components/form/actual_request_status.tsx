import React from 'react';
interface Props{
    actualRequestStatus:string
}
const ActualRequestStatus = (props:Props) => {
    return (
            <div className="flex flex-col items-start space-y-2">
                <h4>
                    Actual status :
                </h4>
                <div className="flex items-center text-sm space-x-2 bg-gray-300 bg-opacity-30  py-1 px-3 rounded-full">
                    {/*<div className="bg-gray-300 rounded-full h-2 w-2 "/>*/}
                    <p>
                        {props.actualRequestStatus}
                    </p>
                </div>
        </div>
    );
};

export default ActualRequestStatus;