"use client"
import { BarList } from '@tremor/react';

const datahero = [
    { name: '/approved', value: 26 },
    { name: '/pending', value: 11 },
    { name: '/rejected', value: 6 },
];

export const BarListHero = () => (
    <>
        <BarList data={datahero} color="teal-500" className="w-[40%]" />
    </>
);