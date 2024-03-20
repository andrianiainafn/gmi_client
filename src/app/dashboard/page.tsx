import React from 'react';
import {MaterialStatisticContainer} from "@/app/dashboard/_components/number_indicator/progress_circular";
import {BarListHero} from "@/app/dashboard/_components/number_indicator/number_bar";
import MovementContainer from "@/app/dashboard/_components/movement/movement_container";

const Page = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Materials stats resume :</h3>
                <MaterialStatisticContainer/>
            </div>
            <div className="flex items-start justify-between">
                <div className="flex flex-col space-y-2 w-[44%]">
                    <h3 className="font-semibold">Request :</h3>
                    <BarListHero/>
                </div>
                <div className="w-[54%] space-y-2">
                    <h3 className="font-semibold">
                        Last movement :
                    </h3>
                    <MovementContainer/>
                </div>
            </div>
        </div>
    );
};

export default Page;