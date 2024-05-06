import React, { useState } from "react";
import Bag from "@/public/assets/images/bigbag.png";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const orders = ["Items Ordered", "Invoices", "Order Shipment"];
function OrderedId() {
  const [width] = useWindowSize();
  const router = useRouter();
  const [orderSelected, setOrderSelected] = useState(0);
  return (
    <>
      <div className="w-full relative flex flex-col sm:flex-row gap-6 px-4 py-3 bg-zinc-100 rounded-xl justify-start items-center ">
        {orders.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setOrderSelected(index);
            }}
            className={`px-[18px] py-3 rounded-lg justify-start items-center  leading-tight text-zinc-600 text-base font-medium  leading-tight${
              orderSelected === index ? "" : "text-zinc-600"
            }`}
          >
            {item}
          </button>
        ))}
        {width > 640 ? (
          <button
            className="absolute  w-[146px] h-[44px] rounded-lg  bg-primary transition-all duration-500 ease-in-out "
            style={{
              transform: `translatex(calc(${orderSelected * 90}% + ${
                24 * orderSelected
              }px))`,
            }}
          >
            <p className="px-4 py-2 text-white  text-sm font-medium  leading-tight">
              {orders[orderSelected]}
            </p>
          </button>
        ) : (
          <button
            className="absolute  w-[146px] h-[44px] rounded-lg  bg-primary transition-all duration-500 ease-in-out "
            style={{
              transform: `translatey(calc(${orderSelected * 90}% + ${
                24 * orderSelected
              }px))`,
            }}
          >
            <p className="px-4 py-2 text-white  text-sm font-medium  leading-tight">
              {orders[orderSelected]}
            </p>
          </button>
        )}
      </div>
      {orders[orderSelected] === "Items Ordered" ? (
        <div>
          <div className=" grid grid-cols-[9fr_1fr_1fr_1fr] mt-[40px] border-b border-black border-opacity-10 gap-2">
            <p>Product Name</p>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </div>
          <div className="inline-grid w-full grid-cols-[9fr_1fr_1fr_1fr] pt-4 gap-2">
            <div>
              <div className="flex gap-4">
                <div>
                  <img className="max-w-[75px]" src={Bag.src} />
                </div>
                <div className="flex flex-col gap-2 pb-[38px]">
                  <p className=" text-zinc-900 text-base font-medium  leading-tight">
                    Coach
                  </p>
                  <p className="w-full max-w-[220px] text-zinc-600 text-base font-normal  leading-tight">
                    Leather Coach Bag
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-zinc-900  text-sm font-normal leading-tight">
              $54.69
            </p>
            <p className=" text-zinc-900 text-sm font-normal  leading-tight">
              2
            </p>
            <p className=" text-zinc-900 text-sm font-normal  leading-tight">
              $109.38
            </p>
          </div>
          <div className="w-full text-zinc-900 text-xl font-semibold leading-relaxed mt-10 border-b border-black border-opacity-10 py-2">
            Order Information
          </div>
          <div className="flex justify-between gap-x-4 gap-y-10 pt-2 flex-wrap mb-10">
            <div className="w-full sm:max-w-[260px]">
              <div className="pb-2 text-zinc-900 text-base font-medium  leading-tight">
                Order Details
              </div>
              <div className="flex max-w-[388px] justify-between items-start pb-3  ">
                <p className="text-zinc-900 text-base font-medium  leading-tight">
                  Sub Total
                </p>
                <p className="text-right text-zinc-900 text-base font-medium  leading-[18px]">
                  $119.69
                </p>
              </div>
              <div className="flex max-w-[388px] justify-between items-start pb-3 ">
                <p className="text-zinc-900 text-base font-medium  leading-tight">
                  Discount
                </p>
                <p className="text-right text-zinc-900 text-base font-medium  leading-[18px]">
                  -$13.40
                </p>
              </div>
              <div className="flex max-w-[388px] justify-between items-start pb-3 ">
                <p className="text-zinc-900 text-base font-medium  leading-tight">
                  Delivery Fee
                </p>
                <p className="text-right text-zinc-900 text-base font-medium  leading-[18px]">
                  -$0.00
                </p>
              </div>
              <div className="flex max-w-[388px] justify-between items-start pb-3 ">
                <p className="text-zinc-900 text-base font-semibold  leading-tight">
                  Grand Total
                </p>
                <p className="text-right text-zinc-900 text-base font-semibold  leading-tight">
                  $106.29
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full sm:max-w-[157px]">
              <p className="text-zinc-600 text-base font-medium  leading-tight">
                Payment Details
              </p>
              <p className="text-zinc-900 text-base font-medium  leading-tigh">
                Cash on Delivery
              </p>
            </div>
            <div className="flex flex-col w-full max-w-[260px]">
              <p className="text-zinc-600 text-base font-medium  leading-tight pb-1">
                Address Details
              </p>
              <div className="flex justify-between items-center">
                <p className="text-zinc-900 text-base font-medium  leading-tight pb-1">
                  Vincent Lobo
                </p>
                <span className="text-black text-xs font-medium font-['Inter'] leading-[18px]  bg-zinc-100 px-[20px] py-[5px]">
                  Home
                </span>
              </div>
              <p className="text-zinc-900 text-base font-medium  leading-tight pb-1">
                3068 Woodlawn Drive
              </p>
              <p className="text-zinc-900 text-base font-medium  leading-tight pb-1">
                414-672-5388
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-end items-center mb-[233px]">
            <Button onClick={() => {}} size={"sm"} variant={"primary"}>
              Reorder
            </Button>
            <Button onClick={() => {}} size={"sm"} variant={"outline"}>
              Add Rating
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default OrderedId;
