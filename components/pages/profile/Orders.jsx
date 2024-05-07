import ChevronRighrGrayIcon from "@/components/icons/ChevronRighrGrayIcon";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const variations = [
    {
        id: "#874522645",
        date: "September 5,<br/> 2020",
        price: 218.5,
        status: "Cancelled",
        tarsactionStatus: "Cancelled",
    },
    {
        id: "#874522646",
        date: "September 5,<br/> 2020",
        price: 218.5,
        status: "Paid",
        tarsactionStatus: "Completed",
    },
    {
        id: "#874522647",
        date: "September 5,<br/> 2020",
        price: 218.5,
        status: "Pending",
        tarsactionStatus: "Processing",
    },
    {
        id: "#874522648",
        date: "September 5,<br/> 2020",
        price: 218.5,
        status: "Paid",
        tarsactionStatus: "Completed",
    },
];
const status = ["Completed", "Processing", "Cancelled"];

function Orders({ searchTerm }) {
    const [width] = useWindowSize();
    const [tabClicked, setTabClicked] = useState(0);
    useEffect(() => {
        setTabClicked(status.findIndex((stat) => status.includes(stat)));
    }, []);
    return (
        <>
            <div className="w-full relative border bg-zinc-100 rounded-xl px-4 py-3 flex gap-6   items-center justify-start flex-col sm:flex-row">
                {status.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setTabClicked(index);
                        }}
                        className={`px-[18px] py-3 rounded-lg flex justify-start items-center text-base font-medium leading-tight ${
                            tabClicked === index ? "" : "text-[#626262] "
                        } `}
                    >
                        {item}
                    </button>
                ))}
                {width >= 640 ? (
                    <button
                        className="absolute w-[121px] h-[44px] rounded-lg transition-all duration-500 bg-primary ease-in-out  "
                        style={{
                            transform: `translatex(calc(${
                                tabClicked * 100
                            }% + ${24 * tabClicked}px ))`,
                        }}
                    >
                        <p className="text-white py-3 px-4">
                            {status[tabClicked]}
                        </p>
                    </button>
                ) : (
                    <button
                        className="absolute w-[121px] h-[44px] rounded-lg transition-all duration-500 bg-primary ease-in-out  "
                        style={{
                            transform: `translateY(calc(${
                                tabClicked * 100
                            }% + ${24 * tabClicked}px ))`,
                        }}
                    >
                        <p className="text-white py-3 px-4">
                            {status[tabClicked]}
                        </p>
                    </button>
                )}
            </div>
            <div className="pt-10">
                <div className="w-full inline-grid grid-cols-4 text-base font-medium leading-5 text-[#626262] border-b-2 pb-2 pl-[58px] ">
                    <p>Order ID</p>
                    <p>Date</p>
                    <p>Price</p>
                    <p>Status</p>
                </div>
            </div>
            <div className="pt-6">
                {variations
                    .filter(
                        (_var) =>
                            status[tabClicked] === _var.tarsactionStatus &&
                            _var.id.includes(searchTerm)
                    )
                    .map((item, index) => (
                        <div
                            key={index}
                            className="w-full grid grid-cols-[1fr_5fr_4fr_4fr_4fr_2fr] py-3 group  relative items-center h-[78px] bg-zinc-100 mb-4"
                        >
                            <Link
                                href={`/profile/my-orders/${item.id.replace(
                                    "#",
                                    ""
                                )}`}
                                className="absolute top-0 left-0 h-full w-full  bg-transparent"
                            ></Link>
                            <input className="" type="checkbox" />
                            <p>{item.id}</p>
                            <p
                                className=""
                                dangerouslySetInnerHTML={{ __html: item.date }}
                            ></p>
                            <p className="pl-7">${item.price.toFixed(2)}</p>
                            <p className="pl-[66px] group-hover:text-primary">
                                {item.status}
                            </p>
                            <div className="">
                                <button className="translate-x-0 group-hover:translate-x-2 transition-all delay-100 duration-500 ease-out ">
                                    <ChevronRighrGrayIcon />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Orders;
