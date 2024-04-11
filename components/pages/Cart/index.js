import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Link from "next/link";
import React, { useState } from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import ChevronButtom from "@/components/icons/ChevronButtom";

function CartComponents() {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <div className=" text-cyan-900 text-[34px] font-semibold font-['Inter'] leading-[44px]  pt-7 pb-9">
        My Cart
      </div>
      <div className="flex flex-col justify-center items-center  md:flex-row gap-[38px] md:justify-between">
        <div className="w-full md:">
          <LeftSide />
        </div>
        <div className="w-full md:max-w-[411px]">
          <RightSide />
        </div>
      </div>
      <div className="hidden  max-w-[708px] md:flex justify-between mt-16">
        <div className="text-zinc-900 text-base font-medium font-['Inter'] leading-tight">
          Apply Coupon Code
        </div>
        <button
          className={`rotate-0 transition-all  duration-300 ease-in ${
            showInput ? "rotate-180" : ""
          }`}
          onClick={() => {
            setShowInput((prevstate) => !prevstate);
          }}
        >
          <ChevronButtom />
        </button>
      </div>
      <div
        className={`pt-[18px] pl-4 overflow-hidden h-auto transition-all  duration-500 ease-in   ${
          showInput === true ? "max-h-20   " : "max-h-0 "
        }`}
      >
        <input className="pt-4 pb-9" placeholder="Apply Coupon Code"></input>
        <button className="text-cyan-900 text-sm font-semibold font-['Inter'] leading-none">
          CHECK
        </button>
      </div>
    </>
  );
}

export default CartComponents;
