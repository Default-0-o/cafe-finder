import Rating from "@/components/common/Rating";
import React from "react";

function ProductInfoDescripton() {
  return (
    <div>
      <p className="text-zinc-900 text-[34px] font-semibold leading-[44px]">
        coach
      </p>
      <p className="text-zinc-600 text-xl font-semibold leading-relaxed pb-8">
        Leather Coach Bag with adjustable starps.
      </p>
      <div>
        <Rating />
        <p>250 Ratings</p>
      </div>

      <div className="flex gap-4 pt-6 pb-6">
        <p className="text-zinc-900 text-[40px] font-bold font-['Inter'] leading-[52px]">
          $54.69
        </p>
        <del className="text-right text-zinc-400 text-[34px] font-semibold font-['Inter'] line-through leading-relaxed">
          $78.66
        </del>
        <p className="text-right text-red-500 text-xl font-semibold font-['Inter'] leading-relaxed pt-3 pb-3">
          50%OFF
        </p>
      </div>
      <div className="flex">
        <div>
          <h2 className="text-zinc-900 text-xl font-semibold font-['Inter'] leading-relaxed pt-6">
            Delivery Details
          </h2>
          <p className="w-[205px] text-zinc-600 text-base font-medium font-['Inter'] leading-tight">
            Check estimated delivery date/pickup option.
          </p>
        </div>
        <div className="w-full max-w-[390px] h-14 pl-4 pr-3 py-[18px] bg-zinc-100 rounded justify-start items-center gap-3 inline-flex mt-9">
          <input
            className=" bg-zinc-100"
            placeholder="Apply Valid Keys"
          ></input>

          <button className="text-cyan-900 text-sm font-semibold font-['Inter'] leading-none">
            Check
          </button>
        </div>
      </div>
      <div className="flex">
        <p className="text-zinc-900 text-xl font-semibold font-['Inter'] leading-relaxed">
          Quantity:
        </p>
        <div>
          <button className="">-</button>
          <button className="">+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoDescripton;
