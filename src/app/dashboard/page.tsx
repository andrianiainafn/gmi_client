import React from 'react';
import {MaterialStatisticContainer} from "@/app/dashboard/_components/number_indicator/progress_circular";
import {BarListHero} from "@/app/dashboard/_components/number_indicator/number_bar";

const Page = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Materials stats resume :</h3>
                <MaterialStatisticContainer/>
            </div>
            <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Request :</h3>
                <BarListHero/>
            </div>
        </div>
    );
};

export default Page;