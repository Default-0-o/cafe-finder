import React from "react";
import BlackFriday from "@/public/assets/images/BlackFriday.png";

function Banner() {
    return (
        <div className="lg:pb-16  lg:block hidden">
            <div className="relative  ">
                <img
                    className="absolute left-0 top-0 w-full h-full bg-cover object-cover rounded-xl "
                    src={BlackFriday.src}
                    alt=""
                />
                <div className=" relative text-right py-[108px] lg:text-7xl px-6  md:text-5xl text-2xl ">
                    <p className="font-bold  pb-3">UPTO 70% OFF</p>
                    <p className="font-normal"> BLACK FRIDAY</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
