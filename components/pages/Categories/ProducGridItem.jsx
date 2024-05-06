import React, { useState } from "react";
import Heart from "@/components/icons/Heart";
import GrayStarIcon from "@/components/icons/GrayStarIcon";
import StarIcon from "@/components/icons/StarIcon";
import SortTypeIcon from "@/components/icons/SortTypeIcon";
import HeartActiveIcon from "@/components/icons/HeartActiveIcon";

function ProducGridItem({ data }) {
    const [heartColor, setHeartColor] = useState(false);

    return (
        <>
            <div className="  grid gap-y-2 w-full h-full  ">
                <img
                    className="w-full h-full rounded-xl "
                    src={data.image}
                    alt=""
                />
                <div className="flex justify-between items-center ">
                    <p className="md:text-base text-xs font-medium   md:leading-5 leading-4 text-[#171520]">
                        {data.title}
                    </p>
                    <button
                        onClick={() => setHeartColor((prevState) => !prevState)}
                    >
                        {heartColor ? (
                            <span>
                                <HeartActiveIcon />
                            </span>
                        ) : (
                            <span>
                                <Heart />
                            </span>
                        )}
                    </button>
                </div>
                <p className="md:text-sm  text-xs md:leading-5 leading-4 font-normal text-[#626262] ">
                    {data.subTitle}
                </p>
                <div className="flex py-2 ">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <div className=" ">
                        <GrayStarIcon />
                    </div>
                </div>
                <div className="flex pb-5">
                    <p className="lg:text-base text-sm font-medium  lg:leading-5 leading-4 text-[#171520] ">
                        ${data.price.toFixed(2)}
                    </p>
                    <span className="px-[6px] lg:text-sm text-[10px]  lg:leading-5 leading-4 font-normal text-[#626262] line-through">
                        ${data.offPrice}
                    </span>
                    <span className="lg:text-sm text-[10px] font-normal lg:leading-5 leading-4 text-[#E21D1D]">
                        {data.offPercent}
                    </span>
                </div>
            </div>
        </>
    );
}

export default ProducGridItem;
