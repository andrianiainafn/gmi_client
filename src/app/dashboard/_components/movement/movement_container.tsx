import React from 'react';
import MovementItem from "@/app/dashboard/_components/movement/movement_item";

const MovementContainer = () => {
    return (
        <div className=" flex flex-col space-y-3">
            <div className="flex  items-center space-x-2">
                <div className="flex items-center pl-2 space-x-2">
                    <div className='bg-yellow-400 rounded-full h-3 w-3 '/>
                    <p>Attribution / </p>
                </div>
                <div className="flex items-center pl-2 space-x-2">
                    <div className='bg-orange-500 rounded-full h-3 w-3 '/>
                    <p>Movement</p>
                </div>
            </div>
            <MovementItem/>
            <MovementItem/>
            <MovementItem/>
        </div>
    );
};

export default MovementContainer;