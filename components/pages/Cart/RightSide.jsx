import Button from "@/components/common/Button";
import React from "react";

function RightSide() {
  return (
    <>
      <div className="w-full md:max-w-[411px] md:w-full">
        <div className=" text-zinc-900 text-xl font-semibold font-['Inter'] leading-relaxed pt-4 pb-4">
          Order Summary
        </div>
        <div className="flex max-w-[388px] justify-between items-start pb-3 pt-4 ">
          <p className="text-zinc-600 text-base font-medium font-['Inter'] leading-tight">
            Sub Total
          </p>
          <p className="text-right text-zinc-900 text-base font-medium font-['Inter'] leading-[18px]">
            $119.69
          </p>
        </div>
        <div className="flex max-w-[388px] justify-between items-start pb-3 ">
          <p className="text-zinc-600 text-base font-medium font-['Inter'] leading-tight">
            Discount
          </p>
          <p className="text-right text-zinc-900 text-base font-medium font-['Inter'] leading-[18px]">
            -$13.40
          </p>
        </div>
        <div className="flex max-w-[388px] justify-between items-start pb-3 ">
          <p className="text-zinc-600 text-base font-medium font-['Inter'] leading-tight">
            Delivery Fee
          </p>
          <p className="text-right text-zinc-900 text-base font-medium font-['Inter'] leading-[18px]">
            -$0.00
          </p>
        </div>
        <div className="flex max-w-[388px] justify-between items-start pb-3 ">
          <p className="text-zinc-900 text-base font-semibold font-['Inter'] leading-tight">
            Grand Total
          </p>
          <p className="text-right text-zinc-900 text-base font-semibold font-['Inter'] leading-tight">
            $106.29
          </p>
        </div>
        <div className="hidden md:flex gap-8 mt-10">
          <Button
            customClass={
              "w-[180px] h-10 py-2.5 bg-cyan-900 rounded-lg justify-center items-center gap-2 inline-flex"
            }
            onClick={() => {}}
            size={"sm"}
            variant={"primary"}
          >
            Place Order
          </Button>
          <Button
            customClass={
              "w-[180px] h-10  py-2.5 bg-white rounded-lg border-2 border-cyan-900 justify-center items-center gap-2 inline-flex"
            }
            onClick={() => {}}
            size={"sm"}
            variant={"outline"}
          >
            <p className=" w-full max-w-[147px] text-center text-cyan-900 text-xs font-medium font-['Inter'] leading-tight">
              Continue Shopping
            </p>
          </Button>
        </div>
      </div>
      <div className="flex md:hidden gap-[18px] pt-14">
        <div>
          <p>Total Bag Amount</p>
          <p>$106.29</p>
        </div>
        <Button
          customClass={
            "w-[208px] h-10 py-2.5 bg-cyan-900 rounded-lg justify-center items-center gap-2 inline-flex"
          }
          onClick={() => {}}
          size={"sm"}
          variant={"primary"}
        >
          Place order
        </Button>
      </div>
    </>
  );
}

export default RightSide;
