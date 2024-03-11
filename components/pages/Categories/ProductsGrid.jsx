import React, { useState } from "react";
import PlusIcon from "@/components/icons/plusIcon";
import CheckboxIcon from "@/components/icons/checkboxIcon";
import NegativeIcon from "@/components/icons/NegativeIcon";
function ProductsGrid() {
    const [accordionOpen, setAccodionOpen] = useState(false);
    return (
        <>
            <div className="px-5 pb-10">
                <h2 className="font-semibold text-[#1B4B66] text-4xl leading-[44px]">
                    Handbags
                </h2>
            </div>
            <div className="pl-5 pr-8  ">
                <ul>
                    <li className=" ">
                        <button className="w-[286px] flex justify-between">
                            <span>Size</span>
                            <span>
                                <PlusIcon />
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setAccodionOpen(!accordionOpen)}
                            className="w-[286px] flex justify-between"
                        >
                            <span>Color</span>
                            {accordionOpen ? (
                                <span>
                                    <NegativeIcon />
                                </span>
                            ) : (
                                <span>
                                    <PlusIcon />
                                </span>
                            )}
                        </button>
                        <div
                            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                accordionOpen ? `grid-rows-[1fr]` : `hidden`
                            } `}
                        >
                            <button className="flex">
                                <span>
                                    <CheckboxIcon />
                                </span>
                                <span>Blue</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Maroon Red</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Crimson Red</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Seinna Pink</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Teal</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Aquamarine</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Off-White</span>
                            </button>
                            <button className="flex">
                                <CheckboxIcon />
                                <span>Muave Orange</span>
                            </button>
                        </div>
                    </li>
                    <li>
                        <button className="w-[286px] flex justify-between">
                            <span>Brand</span>
                            <span>
                                <PlusIcon />
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="w-[286px] flex justify-between">
                            <span>Price Range</span>
                            <span>
                                <PlusIcon />
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="w-[286px] flex justify-between">
                            <span>Discount</span>
                            <span>
                                <PlusIcon />
                            </span>
                        </button>
                    </li>
                    <li>
                        <button className="w-[286px] flex justify-between">
                            <span>Availability</span>
                            <span>
                                <PlusIcon />
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProductsGrid;
