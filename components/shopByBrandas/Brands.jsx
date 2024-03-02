import React from "react";
import Logo from "@/public/assets/images/logos/logo.png";

function Brands() {
    return (
        <>
            <div className="">
                <div className="px-5 pt-16 pb-6 ">
                    <h1 className="text-4xl not-italic font-semibold text-[#13101E] leading-[44px] mb-8">
                        Shop by Brands
                    </h1>
                </div>
                <div className=" lg:pb-[68px] lg:grid lg:grid-cols-6 lg:px-[22px] lg:gap-4 md:grid md:grid-cols-3 md:gap-y-4 md:pb-6  sm:grid sm:grid-cols-2  sm:gap-y-4 sm:pb-6 grid grid-cols-2 gap-y-4 pb-6  ">
                    <div className="flex justify-center">
                        <div className="border bg-[#F4F4F4] rounded-xl h-[168px] w-[168px] flex justify-center items-center">
                            <div>
                                <img src={Logo.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border bg-[#F4F4F4] rounded-xl h-[168px] w-[168px] flex justify-center items-center">
                            <div>
                                <img src={Logo.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border bg-[#F4F4F4] rounded-xl h-[168px] w-[168px] flex justify-center items-center">
                            <div>
                                <img src={Logo.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border bg-[#F4F4F4] rounded-xl h-[168px] w-[168px] flex justify-center items-center">
                            <div>
                                <img src={Logo.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border bg-[#F4F4F4] rounded-xl h-[168px] w-[168px] flex justify-center items-center">
                            <div>
                                <img src={Logo.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="border bg-[#F4F4F4] rounded-xl h-[168px] w-[168px] flex justify-center items-center">
                            <div>
                                <img src={Logo.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brands;
