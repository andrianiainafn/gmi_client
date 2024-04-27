"use client";
import Image from "next/image";
import React from "react";
import {WobbleCard} from "@/components/ui/wobbled-card";

export function WobbleCardContainer() {
    return (
        <div id="why" className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-teal-500 dark:bg-teal-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        IT Hardware Management: Efficiently Manage Your IT Assets
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        Track and manage your IT assets seamlessly with our advanced platform. From inventory management to tracking software licenses, we provide comprehensive solutions tailored to your business needs.
                    </p>
                </div>
                <Image
                    src="/visualisation.jpg"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    IT Hardware Management: Streamlined Asset Management
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Simplify your asset management process with our intuitive interface. Our platform offers easy access to crucial information, enabling you to make informed decisions and optimize your IT infrastructure efficiently.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        IT Hardware Management: Sign Up for Our Cutting-Edge IT Solutions
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Join us today to experience the power of modern IT asset management. Our innovative tools and expert support will empower your organization to stay ahead in today's rapidly evolving technology landscape.
                    </p>
                </div>
                <Image
                    src="/tools.jpg"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
        </div>
    );
}
