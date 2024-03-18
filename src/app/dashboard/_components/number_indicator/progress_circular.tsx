"use client"
import { Card, ProgressCircle } from '@tremor/react';

export function ProgressCircleUsageExample() {
    return (
        <div className="flex space-x-3">
            <div className="space-y-3">
                <Card className="mx-auto max-w-sm">
                    <div className="flex justify-start space-x-5 items-center">
                        <ProgressCircle value={24} color="teal-500" size="md">
                            <span className="text-xs font-medium text-slate-700 dark:text-white">24%</span>
                        </ProgressCircle>
                        <div>
                            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                                12/50 (24%)
                            </p>
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                Number of equipment under maintenance
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="space-y-3">
                <Card className="mx-auto max-w-sm">
                    <div className="flex justify-start space-x-5 items-center">
                        <ProgressCircle value={50} color="teal-500" size="md">
                            <span className="text-xs font-medium text-slate-700 dark:text-white">50%</span>
                        </ProgressCircle>
                        <div>
                            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                                25/50 (50%)
                            </p>
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                Number of equipment in service or activity
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="space-y-3">
                <Card className="mx-auto max-w-sm">
                    <div className="flex justify-start space-x-5 items-center">
                        <ProgressCircle value={26} color="teal-500" size="md">
                            <span className="text-xs font-medium text-slate-700 dark:text-white">26%</span>
                        </ProgressCircle>
                        <div>
                            <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                                13/50 (26%)
                            </p>
                            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                Number of equipment out of service
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}