import Button from "@/components/common/Button";
import Rating from "@/components/common/Rating";
import Plus from "@/components/icons/Plus";
import Purchase from "@/components/icons/Purchase";
import StarIcon from "@/components/icons/StarIcon";
import Wishlist from "@/components/icons/Wishlist";
import Minus from "@/components/icons/minus";
import React, { useState } from "react";

function ProductInfoDescripton() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="w-full md:w-[calc(50%_-_12px)] ">
      <p className=" text-zinc-900 text-base font-medium font-['Inter'] leading-tight lg:text-[34px] md:text-[24px] md:font-semibold lg:leading-[44px] md:leading-[34px] pb-1">
        coach
      </p>
      <p className=" text-zinc-600 text-sm font-medium font-['Inter'] leading-[18px] md:text-zinc-600 md:text-xl md:font-semibold lg:leading-relaxed md:leading-2 md:pb-8">
        Leather Coach Bag with adjustable starps.
      </p>
      <div className="hidden md:flex md:gap-3">
        <Rating />
        <p className="md:text-zinc-400 md:text-base md:font-normal md:font-['Inter'] md:leading-tight">
          (250) Ratings
        </p>
      </div>

      <div className=" flex lg:flex-row  md:flex-col md:gap-4 gap-3 pt-6 pb-6">
        <div>
          <p className="text-zinc-900  text-xl  leading-none  font-semibold  w-[70px] md:w-full pb-1.5 lg:text-[40px] md:text-[30px] md:font-bold font-['Inter'] md:leading-[52px]">
            $54.69
          </p>
        </div>
        <div className="flex gap-4">
          <del className="hidden md:block text-right text-zinc-400 text-[24px] font-semibold font-['Inter'] line-through leading-relaxed pt-2">
            $78.66
          </del>
          <p className=" hidden md:block text-right text-red-500 text-lg font-semibold font-['Inter'] leading-relaxed pt-3 pb-3">
            50%OFF
          </p>
        </div>
        <del className="md:hidden text-right text-zinc-600 text-sm font-medium font-['Inter'] line-through leading-[18px] pt-0.5">
          60.00
        </del>
        <p className="md:hidden text-right text-red-600 text-sm font-medium font-['Inter'] leading-[18px] pt-0.5">
          20%OFF
        </p>
      </div>
      <div className="md:hidden flex gap-4">
        <div className="flex gap-[2px]">
          <p className="text-zinc-900 text-base font-semibold font-['Inter'] leading-none pt-[7px]">
            4.5
          </p>
          <span className="pt-0.5">
            <StarIcon color="#FF8C4B" />
          </span>
        </div>
        <div className="flex-col ">
          <p className="text-zinc-900 text-sm font-semibold font-['Inter'] leading-none">
            Average Rating
          </p>
          <p className="text-zinc-600 text-sm font-medium font-['Inter'] leading-[14px] pt-1 ">
            43 Ratings & 23 Reviews
          </p>
        </div>
      </div>
      <div className="flex md:hidden w-full gap-2 justify-start items-center overflow-auto">
        <div className="w-full  px-4 py-[15px] bg-white rounded-lg border border-cyan-900  items-start gap-2 inline-flex mt-6">
          <div className="flex-col gap-2">
            <p className="text-zinc-900 text-xs font-medium font-['Inter'] leading-[18px] w-[184px] mb-1 pt-1">
              Get upto 30% Off on order value above $100
            </p>
            <p className="text-cyan-900 text-[10px] font-medium font-['Inter'] leading-[13px] w-[184px]">
              Terms & Conditions
            </p>
          </div>
          <div className=" bg-zinc-100 rounded   flex-col  gap-2 inline-flex w-[110px] h-[59px] pt-2 pr-2">
            <p className="text-zinc-600 text-center text-[10px] font-medium font-['Inter'] leading-[13px] ">
              Use Code
            </p>
            <p className=" text-zinc-900 text-center text-xs font-medium font-['Inter'] leading-[18px]">
              ORDER100
            </p>
          </div>
        </div>
        <div className="w-full  px-4 py-[15px] bg-white rounded-lg border border-cyan-900 justify-between items-start gap-2 inline-flex mt-6">
          <div className="flex-col gap-2">
            <p className="text-zinc-900 text-xs font-medium font-['Inter'] leading-[18px] w-[184px] mb-1 pt-1">
              Get upto 30% Off on order value above $100
            </p>
            <p className="text-cyan-900 text-[10px] font-medium font-['Inter'] leading-[13px] w-[184px]">
              Terms & Conditions
            </p>
          </div>
          <div className="  bg-zinc-100 rounded flex-col justify-start  gap-2 inline-flex w-[110px] h-[59px] pt-2 pr-2">
            <p className="text-zinc-600 text-center text-[10px] font-medium font-['Inter'] leading-[13px] ">
              Use Code
            </p>
            <p className="text-zinc-900 text-center text-xs font-medium font-['Inter'] leading-[18px]">
              ORDER100
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap max-w-[611px] ">
        <div className="flex-col gap-2 pt-6">
          <h2 className="text-zinc-900 w-full // Delivery Details text-sm font-semibold  lg:text-xl md:text-lg md:font-semibold font-['Inter'] leading-relaxed  pb-2">
            Delivery Details
          </h2>
          <p className=" w-full text-zinc-600 text-sm font-medium font-['Inter'] leading-tight md:pr-4 md:pb-10 md:pt-2">
            Check estimated delivery date/pickup option.
          </p>
        </div>
        <div className="hidden w-full max-w-[390px] h-14 pl-4 pr-3 py-[18px] bg-zinc-100 rounded justify-start items-center gap-3 md:inline-flex mt-9">
          <input
            className=" bg-zinc-100 w-[300px] text-zinc-600 text-base font-medium font-['Inter'] leading-tight"
            placeholder="Apply Valid Pincode"
          ></input>

          <button className="text-cyan-900 text-sm font-semibold font-['Inter'] leading-none">
            CHECK
          </button>
        </div>
      </div>
      <div className="flex md:hidden items-center justify-center gap-[10px] pb-[11px] pt-[18px]">
        <button className="w-11 h-11 py-2.5 px-[11px] bg-zinc-100">
          <Wishlist />
        </button>

        <Button
          preIcon={<Purchase />}
          onClick={() => {}}
          variant={"primary"}
          size={"lg"}
        >
          Add to Bag
        </Button>
      </div>
      <div className="hidden md:flex gap-4 pt-10">
        <p className="text-zinc-900 w-full max-w-[90px] max-h-[26px] text-xl font-semibold font-['Inter'] leading-relaxed">
          Quantity:
        </p>
        <div className=" max-w-[73px] max-h-[30px] rounded border border-cyan-900 justify-center items-center inline-flex">
          <button
            className="w-6 h-6"
            onClick={() => setQuantity((prevState) => prevState - 1)}
            disabled={quantity == 0}
          >
            <Minus />
          </button>
          <p className="text-zinc-900 text-sm font-normal font-['Inter'] leading-none pt-1 pl-2 pr-2 pb-1">
            {quantity}
          </p>
          <button
            className="w-6 h-6"
            onClick={() => setQuantity((prevState) => prevState + 1)}
          >
            <Plus />
          </button>
        </div>
      </div>
      <div className="hidden w-full max-w-[814px] h-44 justify-start items-center gap-8 md:flex pt-[50px] overflow-auto">
        <div className="w-full max-w-[391px] h-24 px-4 py-[15px] bg-white rounded-lg border border-cyan-900 justify-start items-start gap-2 inline-flex">
          <div className="flex-col gap-2">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] w-[229px]">
              Get upto 30% Off on order value above $100
            </p>
            <p className="text-cyan-900 text-sm font-medium font-['Inter'] leading-[13px] w-[184px]">
              Terms & Conditions
            </p>
          </div>
          <div className="w-[109px] h-[66px] px-[13px] py-3.5 bg-zinc-100 rounded flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-zinc-600 text-sm font-medium font-['Inter'] leading-[13px]">
              Use Code
            </p>
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-[18px]">
              ORDER100
            </p>
          </div>
        </div>
        <div className="w-full max-w-[391px] h-24 px-4 py-[15px] bg-white rounded-lg border border-cyan-900 justify-start items-start gap-2 inline-flex">
          <div className="flex-col gap-2">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] w-[229px]">
              Get upto 30% Off on order value above $100
            </p>
            <p className="text-cyan-900 text-sm font-medium font-['Inter'] leading-[13px] w-[184px]">
              Terms & Conditions
            </p>
          </div>
          <div className="w-[109px]  px-[13px] py-3.5 bg-zinc-100 rounded flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-zinc-600 text-sm font-medium font-['Inter'] leading-[13px]">
              Use Code
            </p>
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-[18px]">
              ORDER100
            </p>
          </div>
        </div>
        <div className="w-full max-w-[391px] h-24 px-4 py-[15px] bg-white rounded-lg border border-cyan-900  justify-start items-start gap-2 inline-flex">
          <div className="flex-col gap-2">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] w-[229px]">
              Get upto 30% Off on order value above $100
            </p>
            <p className="text-cyan-900 text-sm font-medium font-['Inter'] leading-[13px] w-[184px]">
              Terms & Conditions
            </p>
          </div>
          <div className="w-[109px] h-[66px] px-[13px] py-3.5 bg-zinc-100 rounded flex-col justify-start items-start gap-2 inline-flex">
            <p className="text-zinc-600 text-sm font-medium font-['Inter'] leading-[13px]">
              Use Code
            </p>
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-[18px]">
              ORDER100
            </p>
          </div>
        </div>
      </div>
      <div className=" hidden max-w-[592px] w-full h-11 justify-start items-center gap-6 md:inline-flex mt-16">
        <Button
          preIcon={<Purchase />}
          onClick={() => {}}
          variant="primary"
          size={"lg"}
        >
          Add to bag
        </Button>

        <Button
          preIcon={<Wishlist />}
          onClick={() => {}}
          variant="outline"
          size={"lg"}
        >
          Add To Whishlist
        </Button>
      </div>
    </div>
  );
}

export default ProductInfoDescripton;
