import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import Link from "next/link";

const FooterSection = () => {
    return (
        <div className=' space-y-4 py-2 footer'>
            <div className="flex justify-between items-start flex-col md:flex-row ">
                <div className="w-[100%] md:w-[40%]  text-start">
                    <p className=" text-4xl sm:text-5xl font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                        GmI
                    </p>
                </div>
                <div className="flex-1 flex justify-between items-start md:w-[45%] w-[100%] mt-5 list space-y-3">
                    <div className="flex flex-col space-y-2">
                        <h6 className='opacity-70'>Overview</h6>
                        <div className="flex flex-col space-y-1 text-sm">
                            <Link href="" className="hover:text-teal-500">Why gmi ?</Link>
                            <Link href="" className="hover:text-teal-500">Feature</Link>
                            <Link href="" className="hover:text-teal-500">About</Link>
                            <Link href="" className="hover:text-teal-500">Contact</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h6 className='opacity-70'>Service</h6>
                        <div className="flex flex-col space-y-1 text-sm ">
                            <Link href="" className="hover:text-teal-500" >Web Development</Link>
                            <Link href="" className="hover:text-teal-500">Mobile Development</Link>
                            <Link href="" className="hover:text-teal-500">Machine Learning Development</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h6 className='opacity-70'>Way to contact me</h6>
                        <div className="flex flex-col space-y-1 text-sm">
                            <Link href="" className="hover:text-teal-500">(+261) 344383115</Link>
                            <Link href="" className="hover:text-teal-500">nomena.pro@gmail.com</Link>
                            <Link href="" className="hover:text-teal-500">Antananarivo-Madagascar</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#fff] flex justify-between items-center">
                <div className="">
                    <p className='opacity-70'> Andrianianafn &#169; {new Date().getFullYear()} </p>
                </div>
                <div className="flex text-black dark:text-white justify-between items-center space-x-2 cursor-pointer">
                    <a className='cursor-pointer'>
                        <FaFacebook size="25" />
                    </a>
                    <a className='cursor-pointer'>
                        <FaLinkedin size="25"  />
                    </a>
                    <a className='cursor-pointer'>
                        <FaGithub size="25"  />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;