"use client"
import React from 'react';
import {Card, ProgressCircle} from "@tremor/react";

interface Props{
    total: number,
    label:string,
    number:number
}
const MaterialStatisticItem = (props:Props) => {
    const {total,label,number}=props
    const percent = (number*100)/total
    return (
        <div className="space-y-3">
            <Card className="mx-auto max-w-sm">
                <div className="flex justify-start space-x-5 items-center">
                    <ProgressCircle value={percent} color="teal-500" size="md">
                        <span className="text-xs font-medium text-slate-700 dark:text-white">{percent}%</span>
                    </ProgressCircle>
                    <div>
                        <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                            {number}/{total} ({percent}%)
                        </p>
                        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            Number of equipment {label}
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MaterialStatisticItem;