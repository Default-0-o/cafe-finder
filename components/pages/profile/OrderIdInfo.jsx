import React, { useEffect, useState } from "react";
import Yellow from "@/public/assets/images/yellow_bag.png";
import useWindowSize from "@/hooks/useWindowSize";

const status = ["Items Ordered", "Invoices", "Order Shipment"];
function OrderIdInfo() {
    const [width] = useWindowSize();
    const [tabClicked, setTabClicked] = useState(0);
    useEffect(() => {
        setTabClicked(status.findIndex((stat) => status.includes(stat)));
    }, []);
    return (
        <>
            <div className="w-full relative border bg-zinc-100 rounded-xl px-4 py-3 flex flex-col gap-6   items-center justify-start sm:flex-row">
                {status.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setTabClicked(index);
                        }}
                        className={`px-[18px] w-[157px] py-3 rounded-lg justify-start items-center text-base font-medium leading-tight ${
                            tabClicked === index ? "" : "text-[#626262] "
                        } `}
                    >
                        {item}
                    </button>
                ))}
                {width >= 640 ? (
                    <button
                        className="absolute w-[157px] h-[44px] rounded-lg transition-all duration-500 bg-primary ease-in-out  "
                        style={{
                            transform: `translatex(calc(${
                                tabClicked * 100
                            }% + ${24 * tabClicked}px )) `,
                        }}
                    >
                        <p className="text-white py-3 px-4">
                            {status[tabClicked]}
                        </p>
                    </button>
                ) : (
                    <button
                        className="absolute w-[157px] h-[44px] rounded-lg transition-all duration-500 bg-primary ease-in-out  "
                        style={{
                            transform: `translatey(calc(${
                                tabClicked * 100
                            }% + ${24 * tabClicked}px )) `,
                        }}
                    >
                        <p className="text-white py-3 px-4">
                            {status[tabClicked]}
                        </p>
                    </button>
                )}
            </div>
            <div className="py-10">
                <div className="grid grid-cols-[9fr_1fr_1fr_1fr] text-base font-medium leading-5 text-[#626262] border-b-2 pb-2 gap-4 ">
                    <p>Product Name</p>
                    <p>Price</p>
                    <p>Qty</p>
                    <p>Subtotal</p>
                </div>
                <div className="grid grid-cols-[9fr_1fr_1fr_1fr] pt-2 leading-4 font-medium text-sm text-[#171520] gap-4">
                    <div className="flex gap-4 ">
                        <div>
                            <img
                                className="max-w-20 max-h-20 rounded-lg col-start-1"
                                src={Yellow.src}
                                alt=""
                            />
                        </div>
                        <div className=" text-base font-medium leading-5">
                            <p className="pb-2 text-[#171520] ">Coach</p>
                            <p className="text-[#626262]">Leather Coach Bag</p>
                        </div>
                    </div>
                    <p>$54.69 </p>
                    <p> 2</p>
                    <p> $109.38</p>
                </div>
            </div>
            <div className="leading-7 font-semibold text-xl text-[#13101E] py-4  ">
                <p className="border-b-2 pb-2 text-[#13101E] ">
                    Order Information
                </p>
            </div>
            <div className="flex md:flex-row justify-between gap-x-4 gap-y-10 flex-col  ">
                <div className="leading-5 font-medium text-base text-[rgb(23,21,32)] min-w-[260px]  ">
                    <p className="text-[#626262] pb-2">Order Details</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <p>Sub Total</p>
                            <p>$119.69</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>Discount</p>
                            <p>-$13.40</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>Delivery Fee</p>
                            <p>-$0.00</p>
                        </div>
                        <div className="flex items-center justify-between leading-5 font-semibold text-base">
                            <p>Grand Total</p>
                            <p>$106.29</p>
                        </div>
                    </div>
                </div>
                <div className="  flex flex-col gap-2 min-w-[157px]">
                    <p className="text-[#626262]">Payment Details</p>
                    <p>Cash on Delivery</p>
                </div>
                <div className="min-w-[186px]">
                    <p className="text-[#626262]">Address Details</p>
                    <div className="flex justify-between items-center gap-8 ">
                        <p>Vincent Lobo</p>
                        <div className="bg-[#F1F1F1] rounded-lg  leading-5 font-medium text-xs">
                            <button className="px-5 py-1 ">Home</button>
                        </div>
                    </div>
                    <p>3068 Woodlawn Drive</p>
                    <p>Milwaukee</p>
                    <p>414-672-5388</p>
                </div>
            </div>
            <div className="flex justify-end items-center gap-6 font-semibold leading-6 text-sm pt-10 pb-[234px] w-full flex-wrap">
                <button className="px-8 py-[10px] bg-[#1B4B66] rounded-lg min-w-[136px] text-white">
                    Reorder
                </button>
                <button className="px-8 py-[10px] border border-[#1B4B66] text-[#1B4B66] rounded-lg ">
                    Add Rating
                </button>
            </div>
        </>
    );
}

export default OrderIdInfo;
