"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import {IAccount} from "@/app/dashboard/user/_services/definition";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const AnimatedTooltip = ({
                                    items,isList
                                }: {
    items: IAccount[],isList:boolean;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
    };
    const baseUrl= "http://localhost:8888"
    return (
        <>
            {items.map((item, idx) => (
                <div
                    className="-mr-4  relative group"
                    key={item.accountId}
                    onMouseEnter={() => setHoveredIndex(idx + 1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {hoveredIndex === idx + 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            style={{
                                translateX: translateX,
                                rotate: rotate,
                                whiteSpace: "nowrap",
                            }}
                            className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                        >
                            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                            <div className="font-bold text-white relative z-30 text-base">
                                {item.firstname}
                            </div>
                            <div className="text-white text-xs">{item.roles[0].roleName}</div>
                        </motion.div>
                    )}
                    {
                        isList ? (
                            <>
                                {
                                    item.profileUrl ? (
                                        <>
                                            {
                                                item.providerType === 'credential' ? (
                                                    <Image
                                                        onMouseMove={handleMouseMove}
                                                        height={100}
                                                        width={100}
                                                        src={`${baseUrl}/${item.profileUrl}`}
                                                        alt={item.firstname}
                                                        className="object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                                                    />
                                                ):(
                                                    <Image
                                                        onMouseMove={handleMouseMove}
                                                        height={100}
                                                        width={100}
                                                        src={item.profileUrl}
                                                        alt={item.firstname}
                                                        className="object-cover !m-0 !p-0 object-top rounded-full h-10 w-10 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                                                    />
                                                )
                                            }
                                        </>
                                    ):(
                                        <Avatar >
                                            <AvatarImage src={item.profileUrl} />
                                            <AvatarFallback className="bg-gray-400">
                                                {item.firstname.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    )
                                }
                            </>
                        ):(
                            <>
                                {
                                    item.profileUrl ? (
                                    <Image
                                    onMouseMove={handleMouseMove}
                                height={100}
                                width={100}
                                src={item.profileUrl}
                                alt={item.firstname}
                                className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                            />
                        ):(
                                        <Avatar className="bg-gray-400">
                                            <AvatarImage src={item.profileUrl} />
                                            <AvatarFallback className="bg-gray-400">
                                                {item.firstname.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            ))}
        </>
    );
};
