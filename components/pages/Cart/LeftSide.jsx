import React from "react";
import Bag from "@/public/assets/images/bigbag.png";
import ChevronButtom from "@/components/icons/ChevronButtom";

function LeftSide(customClass) {
  const items = [{}, {}];
  return (
    <>
      <div className="hidden md:flex w-full pb-2">
        <ul className="inline-grid  grid-cols-6 w-full max-w-[535px] ">
          <li className="col-span-3 max-w-[110px] text-zinc-600 text-base font-medium font-['Inter'] leading-tight">
            product Name
          </li>
          <li className="col-span-1 max-w-[39px] text-zinc-600 text-base font-medium font-['Inter'] leading-tight ">
            price
          </li>
          <li className="col-span-1 max-w-[28px] text-zinc-600 text-base font-medium font-['Inter'] leading-tight ">
            Qty
          </li>
          <li className="col-span-1 max-w-[55px] text-zinc-600 text-base font-medium font-['Inter'] leading-tight ">
            Subtotal
          </li>
        </ul>
      </div>
      <div className="hidden md:inline-grid grid-cols-2 grid-rows-1 pt-[26px] gap-12 pr-4">
        <div className="flex gap-4">
          <div>
            <img className="max-w-[75px]" src={Bag.src} />
          </div>
          <div className="flex flex-col gap-2 pb-[38px]">
            <p className=" text-zinc-900 text-base font-medium font-['Inter'] leading-tight">
              Coach
            </p>
            <p className="w-full max-w-[220px] text-zinc-600 text-base font-normal font-['Inter'] leading-tight">
              Leather Coach Bag
            </p>
            <p className="text-zinc-600 text-base font-normal font-['Inter'] leading-tight">
              Qty- 1
            </p>
          </div>
        </div>
        <div className="inline-grid grid-cols-5 grid-rows-2 max-w-[318px] justify-center">
          <p className="w-full max-w-[47px] col-span-2 text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
            $54.69
          </p>
          <p className="w-full max-w-[7px] col-start-3   text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
            1
          </p>
          <p className="w-full max-w-[47px] col-span-2 col-start-5 text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
            $54.69
          </p>
          <button className="w-full col-span-3   max-w-[136px] h-11 px-2 py-2.5 bg-teal-900 bg-opacity-0 rounded-lg justify-center items-center gap-2 inline-flex text-center text-cyan-900 text-sm font-semibold font-['Inter'] underline leading-normal">
            Move to Wishlist
          </button>
          <button className="w-full col-span-2  max-w-[136px] h-11 px-2 py-2.5 bg-teal-900 bg-opacity-0 rounded-lg justify-center items-center gap-2 inline-flex  text-center text-red-700 text-sm font-semibold font-['Inter'] underline leading-normal">
            Remove
          </button>
        </div>
      </div>
      <div className=" hidden md:inline-grid grid-cols-2 grid-rows-1 pt-[26px] gap-12 pr-4">
        <div className="flex gap-4">
          <div>
            <img className="max-w-[75px]" src={Bag.src} />
          </div>
          <div className="flex flex-col gap-2 pb-[38px]">
            <p className=" text-zinc-900 text-base font-medium font-['Inter'] leading-tight">
              Coach
            </p>
            <p className="w-full max-w-[220px] text-zinc-600 text-base font-normal font-['Inter'] leading-tight">
              Leather Coach Bag
            </p>
            <p className="text-zinc-600 text-base font-normal font-['Inter'] leading-tight">
              Qty- 1
            </p>
          </div>
        </div>
        <div className="inline-grid grid-cols-5 grid-rows-2 max-w-[318px] justify-center">
          <p className="w-full max-w-[47px] col-span-2 text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
            $54.69
          </p>
          <p className="w-full max-w-[7px] col-start-3   text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
            1
          </p>
          <p className="w-full max-w-[47px] col-span-2 col-start-5 text-zinc-900 text-sm font-normal font-['Inter'] leading-tight">
            $54.69
          </p>
          <button className="w-full col-span-3   max-w-[136px] h-11 px-2 py-2.5 bg-teal-900 bg-opacity-0 rounded-lg justify-center items-center gap-2 inline-flex text-center text-cyan-900 text-sm font-semibold font-['Inter'] underline leading-normal">
            Move to Wishlist
          </button>
          <button className="w-full col-span-2  max-w-[136px] h-11 px-2 py-2.5 bg-teal-900 bg-opacity-0 rounded-lg justify-center items-center gap-2 inline-flex  text-center text-red-700 text-sm font-semibold font-['Inter'] underline leading-normal">
            Remove
          </button>
        </div>
      </div>
      {items.map((item, index) => (
        <>
          <div className="flex justify-between w-full gap-1  md:hidden ">
            <div className="flex gap-2 w-full">
              <img className=" w-full max-w-[114px]" src={Bag.src} />
              <div className="flex flex-col w-full">
                <p className=" pb-1    text-zinc-900 text-xs font-semibold  leading-none pt-1">
                  Coach
                </p>
                <p className="w-[80px] xs:w-[120px] text-zinc-600 text-xs font-medium  leading-none">
                  Leather Coach Bag
                </p>
                <div className="self-end mt-1">
                  <div className="flex flex-col w-fit ">
                    <div className="flex gap-2 pb-1 xs:pb-4 mt-2">
                      <p className="text-zinc-600 text-xs font-medium font-['Inter'] leading-[18px]">
                        Qty:
                      </p>
                      <p className="text-zinc-900 text-xs font-bold font-['Inter'] leading-[18px]">
                        1
                      </p>
                      <span className="flex items-center justify-center">
                        <ChevronButtom svgProps={{ className: "w-3 h-3" }} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-fit xs:flex-row gap-2 xs:gap-8">
                    <p className="text-zinc-900 text-sm font-semibold font-['Inter'] leading-none">
                      $54.69
                    </p>
                    <div className="flex gap-3 xs:gap-6">
                      <del className="text-zinc-600 text-[10px] font-medium font-['Inter'] line-through leading-none">
                        $69.99
                      </del>
                      <p className="w-[43px] text-red-600 text-[10px] font-medium font-['Inter'] leading-none">
                        20% OFF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-center xs:justify-end md:hidden gap-2 pt-[11px] pb-6">
            <button className="w-[136px] h-11 xs:w-[120px] text-center xs:h-6 xs:px-2 xs:py-2.5 bg-teal-900 bg-opacity-0 rounded-lg justify-center items-center gap-2 inline-flex text-cyan-900 text-xs font-semibold font-['Inter'] leading-none mt-0.5">
              Move to Wishlist
            </button>
            <button className="w-[136px] h-11 xs:w-[60px] xs:h-7 px-2 py-2.5 bg-teal-900 bg-opacity-0 rounded-lg justify-center items-center gap-2 inline-flex text-cyan-900 text-xs font-semibold font-['Inter'] leading-none">
              Remove
            </button>
          </div>
        </>
      ))}

      <div className="flex md:hidden gap-3 w-full max-w-[328px] px-4 pt-6">
        <input
          placeholder="Apply Coupon Code"
          className="w-full max-w-[238px]"
        ></input>
        <button className=" w-full max-w-[40px] font-semibold leading-none text-xs text-cyan-900">
          CHECK
        </button>
      </div>
    </>
  );
}

export default LeftSide;
