import BlueGridIcon from "@/components/icons/BlueGridIcon";
import BlueSortIcon from "@/components/icons/BlueSortIcon";
import ChevronIcon from "@/components/icons/ChevronIcon";
import ChevronUp from "@/components/icons/ChevronUp";
import GridIcon from "@/components/icons/GridIcon";
import SortIcon from "@/components/icons/SortIcon";
import React, { useState } from "react";

function SortGridProducts({ postPerPage, activeSort, onChange, sortTypes }) {
    const [sortIcon, setSortIcon] = useState(false);
    const [accordionOpen, setAccodionOpen] = useState(false);

    return (
        <>
            <div className="xl:flex xl:items-center xl:justify-between  hidden pb-6 ">
                <div className="flex items-center">
                    <div className="flex gap-1 pr-3 ">
                        <BlueGridIcon />

                        <button onClick={() => setSortIcon(!sortIcon)}>
                            {sortIcon ? <BlueSortIcon /> : <SortIcon />}
                        </button>
                    </div>
                    <p className="text-[#171520] text-base font-medium leading-5">
                        Showing 1 - 40 of 145 items
                    </p>
                </div>

                <div className="flex items-center ">
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center gap-1 text-base font-medium leading-5 pr-[74px] ">
                            <p className="text-[#171520]">To Show:</p>
                            <p className="p-4 bg-[#F1F1F1] rounded-lg text-[#626262]">
                                {postPerPage}
                            </p>
                        </div>
                        <div className="flex items-center gap-1 font-medium leading-5 ">
                            <p className="text-[#171520]">Sort By</p>
                            {accordionOpen && (
                                <div
                                    className="fixed top-0 left-0 w-screen h-screen"
                                    onClick={() => setAccodionOpen(false)}
                                ></div>
                            )}
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setAccodionOpen(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className="text-[#626262] bg-[#F1F1F1] flex items-center justify-between py-4 gap-3 pl-4 pr-3 rounded-lg "
                                >
                                    <p className="w-[142px] text-left ">
                                        {activeSort.title}
                                    </p>
                                    {accordionOpen ? (
                                        <ChevronIcon />
                                    ) : (
                                        <ChevronUp />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden lg:flex lg:flex-col lg:pl-5 lg:gap-2 lg:pr-4 absolute left-0 -bottom-1 z-0 bg-[#F1F1F1] w-full  rounded-lg ${
                                        accordionOpen
                                            ? ` lg:py-4 max-h-[172px] translate-y-full`
                                            : ` max-h-0 translate-y-1/4`
                                    }`}
                                >
                                    {sortTypes.map((sortType) => (
                                        <button
                                            onClick={() => {
                                                onChange(sortType);
                                            }}
                                            className={` font-medium  text-[#626262] leading-5 text-base flex gap-1`}
                                            key={sortType.id}
                                        >
                                            <span
                                                className={`min-w-[18px] min-h-[18px] bg-transparent  ${
                                                    sortType.id ===
                                                    activeSort.id
                                                        ? "border-[#1B4B66]"
                                                        : "border-[#626262]"
                                                } border-2 rounded-[50%] flex justify-center items-center`}
                                            >
                                                {sortType.id ===
                                                    activeSort.id && (
                                                    <span className="rounded-[50%] min-w-[10px] min-h-[10px] bg-[#1B4B66]"></span>
                                                )}
                                            </span>
                                            {sortType.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SortGridProducts;
