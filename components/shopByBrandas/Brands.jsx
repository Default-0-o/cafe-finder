import React from "react";
import Logo from "@/public/assets/images/logos/Logo.png";
import ChevronRightIcon from "../icons/ChevronRightIcon";

function Brands() {
    return (
        <>
            <div className=" pt-16 pb-6  flex justify-between  items-center">
                <div>
                    <h1 className=" xl:text-4xl xl:font-semibold xl:px-4 lg:text-4xl lg:not-italic lg:font-semibold text-[#13101E] lg:leading-[44px]  md:text-4xl md:font-semibold sm:text-4xl  sm:not-italic sm:font-semibold sm:px-4 text-lg  font-semibold not-italic  px-4">
                        Shop by Brands
                    </h1>
                </div>
                <div className="flex md:hidden">
                    <button className="text-[#1B4B66] text-xs font-medium leading-5">
                        View all
                    </button>
                    <button className="text-[#1B4B66]">
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
            <div className=" lg:pb-[68px] lg:grid lg:grid-cols-6 lg:gap-11 md:grid md:grid-cols-3 md:gap-y-4 md:gap-x-24 md:pb-6  sm:grid sm:grid-cols-3  sm:gap-y-4 sm:pb-6 grid grid-cols-3 gap-y-4 pb-6 px-4 gap-x-2  ">
                <div className="">
                    <div className="border bg-[#F4F4F4] bg-contain rounded-xl h-[100px]  flex justify-center items-center lg:h-[168px] lg:w-full md:w-full md:h-[168px] sm:w-full ">
                        <div>
                            <img src={Logo.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border bg-[#F4F4F4] bg-contain rounded-xl h-[100px]  flex justify-center items-center lg:h-[168px] lg:w-full md:w-full md:h-[168px] sm:w-full ">
                        <div>
                            <img src={Logo.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border bg-[#F4F4F4] bg-contain rounded-xl h-[100px]  flex justify-center items-center  lg:h-[168px] lg:w-full md:w-full md:h-[168px] sm:w-full ">
                        <div>
                            <img src={Logo.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border bg-[#F4F4F4] bg-contain rounded-xl h-[100px]  flex justify-center items-center  lg:h-[168px] lg:w-full md:w-full md:h-[168px] sm:w-full ">
                        <div>
                            <img src={Logo.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border bg-[#F4F4F4] bg-contain rounded-xl h-[100px]  flex justify-center items-center  lg:h-[168px] lg:w-full md:w-full md:h-[168px] sm:w-full ">
                        <div>
                            <img src={Logo.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="border bg-[#F4F4F4] bg-contain rounded-xl h-[100px]  flex justify-center items-center  lg:h-[168px] lg:w-full md:w-full  md:h-[168px] sm:w-full ">
                        <div>
                            <img src={Logo.src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brands;
