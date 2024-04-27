"use client";
import React from "react";

import Image from "next/image";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "IT Equipment Requests",
        description:
            "Easily submit requests for new equipment for your team. Our platform allows you to request and track the process of allocating new equipment, ensuring efficient management of your organization's IT resources. Receive real-time notifications for each processed request or new submission.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                IT Equipment Requests
            </div>
        ),
    },
    {
        title: "Reports on Out-of-Service Equipment",
        description:
            "Stay informed about the status of your IT equipment in real-time. Receive instant notifications about out-of-service or under maintenance equipment. Our platform enables you to generate detailed reports on faulty equipment, ensuring maximum responsiveness from your IT support team.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/it-tools.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Department Management",
        description:
            "Efficiently organize departments within your organization. Our platform allows you to manage teams and departments seamlessly, facilitating communication and collaboration between different services. Optimize your company's organizational structure for maximum efficiency.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Department Management
            </div>
        ),
    },
    {
        title: "Allocation of Equipment to Employees",
        description:
            "Easily assign IT equipment to your employees. Our platform enables you to track and manage the allocation of equipment to different team members, ensuring fair and efficient distribution of resources. Receive real-time notifications for each equipment allocation.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Allocation of Equipment to Employees
            </div>
        ),
    },
];


export function StickyScrollReveal() {
    return (
        <div id="feature">
            <StickyScroll content={content} />
        </div>
    );
}
