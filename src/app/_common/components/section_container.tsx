import React, {ReactNode} from 'react';

interface  Props{
    title:string
    section:ReactNode
}

const SectionContainer = (props:Props) => {
    return (
        <div  className="flex flex-col space-y-3 ">
            <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-teal-500 rounded-full" />
                <h2 className="text-5xl font-semibold">
                    {props.title}
                </h2>
            </div>
            <div>
                {props.section}
            </div>
        </div>
    );
};

export default SectionContainer;