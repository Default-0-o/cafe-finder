import React from "react";
import About from "@/public/assets/images/About.png";
import Bag from "@/public/assets/images/Bag.png";
import AppleWatch from "@/public/assets/images/AppleWatch.png";
import SunGlass from "@/public/assets/images/SunGlass.png";

function AboutPage() {
    return (
        <>
            <div className="relative grid  ">
                <img
                    className="absolute left-0 top-0 w-full h-full   object-cover rounded-xl "
                    src={About.src}
                    alt=""
                />
                <div className="relative  col-start-10 py-36 pr-16 ">
                    <div className=" opacity-70 border border-[#13101E] bg-zinc-50  sm:border-0 sm:bg-transparent rounded-md ">
                        <p className="text-[#13101E]   font-semibold text-5xl uppercase tracking-wider	 pb-3 pt-2 pl-2 ">
                            About
                        </p>
                        <p className=" text-[#626262] font-normal leading-5 text-base  pb-2 px-1">
                            Lorem Ipsum is simply dummy text of the printing.
                            Lorem <br /> Ipsum is simply dummy text of the
                            printing.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center pt-10  max-w-[714px] gap-2">
                <p className="font-semibold leading-7 text-xl text-[#171520]">
                    About
                </p>
                <p className="text-[#626262] text-base leading-5 font-normal">
                    Lorem Ipsum is simply dummy text of the printing. Lorem
                    Ipsum is simply dummy text of the printing. Lorem Ipsum is
                    simply dummy text of the printing. Lorem Ipsum is simply
                    dummy text of the printing. Lorem Ipsum is simply dummy text
                    of the printing. Lorem Ipsum is simply dummy text of the
                    printing.
                </p>
            </div>
            <div className="flex lg:flex-row flex-col-reverse pt-10  gap-8 items-center">
                <div className="flex flex-col items-center text-center lg:text-start lg:items-start  gap-2 ">
                    <p className="font-semibold leading-7 text-xl text-[#171520]">
                        About
                    </p>
                    <p className="text-[#626262] text-base leading-5 font-normal">
                        Lorem Ipsum is simply dummy text of the printing. Lorem
                        Ipsum is simply dummy text of the printing. Lorem Ipsum
                        is simply dummy text of the printing. Lorem Ipsum is
                        simply dummy text of the printing. Lorem Ipsum is simply
                        dummy text of the printing. Lorem Ipsum is simply dummy
                        text of the printing.
                    </p>
                </div>
                <img className=" rounded-xl" src={Bag.src} alt="" />
            </div>
            <div className="flex lg:flex-row flex-col pt-10  gap-8 items-center">
                <img className=" rounded-xl" src={AppleWatch.src} alt="" />
                <div className="flex flex-col items-center text-center lg:text-start lg:items-start gap-2">
                    <p className="font-semibold leading-7 text-xl text-[#171520]">
                        About
                    </p>
                    <p className="text-[#626262] text-base leading-5 font-normal">
                        Lorem Ipsum is simply dummy text of the printing. Lorem
                        Ipsum is simply dummy text of the printing. Lorem Ipsum
                        is simply dummy text of the printing. Lorem Ipsum is
                        simply dummy text of the printing. Lorem Ipsum is simply
                        dummy text of the printing. Lorem Ipsum is simply dummy
                        text of the printing.
                    </p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse pt-10  gap-8 items-center lg:pb-[118px] pb-10 ">
                <div className="flex flex-col items-center text-center  lg:text-start lg:items-start  gap-2">
                    <p className="font-semibold leading-7 text-xl text-[#171520]">
                        About
                    </p>
                    <p className="text-[#626262] text-base leading-5 font-normal">
                        Lorem Ipsum is simply dummy text of the printing. Lorem
                        Ipsum is simply dummy text of the printing. Lorem Ipsum
                        is simply dummy text of the printing. Lorem Ipsum is
                        simply dummy text of the printing. Lorem Ipsum is simply
                        dummy text of the printing. Lorem Ipsum is simply dummy
                        text of the printing.
                    </p>
                </div>
                <img className=" rounded-xl" src={SunGlass.src} alt="" />
            </div>
        </>
    );
}

export default AboutPage;
