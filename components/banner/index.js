import React from "react";
import Phone from "@/public/assets/images/logos/phone.png";
import ArrowIcon from "../icons/ArrowIcon";
import MakeupBanner from "@/public/assets/images/MakeupBanner.png";
import MakeupBanner2 from "@/public/assets/images/MakeupBanner2.png";
import BlackFriday from "@/public/assets/images/BlackFriday.png";

function Banner() {
    return (
        <>
            <div className="  pb-5 px-4 sm:hidden text-white">
                <div className=" flex bg-[#1B4B66]  text-center  rounded-xl   p-2">
                    <div className="border bg-[#FFE6CA] rounded-xl text-center ">
                        <div className=" px-7 py-3 pt-6">
                            <img src={Phone.src} />
                        </div>
                    </div>
                    <div className=" pl-3">
                        <div>
                            <p className="max-w-[220px] text-left font-medium leading-4">
                                Discover your favrouite products faster with
                                CORA’L web app.
                            </p>
                        </div>
                        <div className="flex pt-5 pb-4 text-center leading-5 ">
                            <button className="pr-1 font-bold">
                                Add Shortcut
                            </button>
                            <button>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 pb-3 md:hidden ">
                <p className="text-sm font-semibold leading-4">
                    Makeup & Skincare
                </p>
            </div>
            <div className="px-4 pb-4">
                <div className="relative  lg:px-11 md:px-11 sm:px-4 px-4 ">
                    <img
                        className=" absolute  top-0 left-0 bg-fixed object-cover w-full h-full rounded-xl"
                        src={MakeupBanner.src}
                        alt=""
                    />
                    <div className="relative  text-[#97451F] ">
                        <p className=" lg:pt-[119px] md:pt-[119px] sm:pt-3  font-normal text-xs lg:text-3xl md:text-3xl leading-5 pt-3 ">
                            LIFESTYLE
                        </p>

                        <p className="lg:font-bold lg:pb-[116px] lg:pt-5  md:pt-5 sm:pt-1 md:pb-[116px] sm:pb-4 font-bold lg:text-5xl md:text-5xl sm:text-base md:max-w-[500px] max-w-[170px] pt-1 pb-4">
                            Makeup Accessories from Top Brands
                        </p>
                        <div className=" md:hidden pb-4">
                            <button className="border rounded-[50%] bg-[#b78f7c] text-[#97451F] md:hidden w-7 h-7  text-center items-center pl-[1px] ">
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between sm:gap-8 gap-4  md:pb-[68px]  pb-6 px-4 ">
                <div className="relative w-1/2  min-w-[156px] min-h-[100px] lg:-h-[256px]">
                    <img
                        className="absolute  top-0 left-0 bg-fixed object-cover w-full h-full rounded-xl "
                        src={MakeupBanner2.src}
                        alt=""
                    />
                    <div className="relative flex justify-end flex-col items-end md:px-10 md:py-[26px] px-4 py-3 ">
                        <p className="  text-[#1B4B66] font-bold md:text-4xl  md:leading-[50px]  sm:max-w-[110px]  md:max-w-[310px] text-right  sm:text-xl max-w-[80px] ">
                            Skincare Essentials
                        </p>

                        <div className="pt-5  ">
                            <button className="border rounded-[50%] bg-[#618ea8] text-[#1B4B66] w-7 h-7 text-center pl-[1px] ">
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative w-1/2  min-w-[156px] min-h-[100px] ">
                    <img
                        className="absolute  top-0 left-0 bg-fixed object-cover w-full h-full rounded-xl "
                        src={MakeupBanner2.src}
                        alt=""
                    />
                    <div className="relative flex justify-end flex-col items-end md:px-10  md:py-[26px]  px-4 py-3 ">
                        <p className=" text-[#1B4B66] font-bold md:text-4xl md:leading-[50px]  md:max-w-[230px] text-right sm:max-w-[110px] sm: sm:text-xl max-w-[80px]  ">
                            Facepacks & Peels
                        </p>
                        <div className="pt-5  ">
                            <button className="border rounded-[50%] bg-[#618ea8] text-[#1B4B66] text-center  pl-[1px]  w-7 h-7  ">
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-16 px-4">
                <div className="relative  ">
                    <img
                        className="absolute left-0 top-0 w-full h-full bg-cover object-cover rounded-xl"
                        src={BlackFriday.src}
                        alt=""
                    />
                    <div className=" relative text-right py-[108px] lg:text-7xl px-6  md:text-5xl text-2xl ">
                        <p className="font-bold  pb-3">UPTO 70% OFF</p>
                        <p className="font-normal"> BLACK FRIDAY</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
