"use client"
import React from 'react';
import Image from "next/image";
import Cursor from "@/components/ui/cursor";

const AboutSection = () => {

    return (
        <div id="about">
            <Cursor/>
            <div id="wrapper">
                <div className="portfolio-item">
                    <div className="portfolio-thumb">
                        <Image width={400} height={700} src="/images.jpg" alt="test"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;