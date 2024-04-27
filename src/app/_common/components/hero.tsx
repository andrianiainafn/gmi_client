import React from 'react';
import NavBar from "@/app/_common/components/nav_bar";
import {TextGenerateEffectHero} from "@/app/_common/components/hero_text";
import Link from "next/link";
import {MoveRight} from "lucide-react";
import {AnimatedTooltipPreview} from "@/app/_common/components/lading_tooltip_illustration";

const Hero = () => {
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <NavBar/>
            <div className='flex mt-[35vh] justify-center items-center flex-col space-y-12 z-20 m-32 text-center'>
                <div>
                    <TextGenerateEffectHero/>
                    <AnimatedTooltipPreview/>
                </div>
                {/*<div className="flex items-center space-x-2">*/}
                    <Link href="/api/auth/signin" >
                        <button className="px-8 h-12  flex space-x-2 items-center  rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                            <span className="text-xl">Join now</span>
                            <MoveRight />
                        </button>
                    </Link>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Hero;