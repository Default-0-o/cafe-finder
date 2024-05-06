import ChevtonRight from "@/components/icons/ChevtonRight";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const status = ["Completed", "Processing", "Cancelled"];
const variations = [
  {
    id: "#874522645",
    date: "September</br> 5, 2020",
    price: "$218.50",
    status: "Cancel",
    transactionStatus: "Cancelled",
  },
  {
    id: "#874522646",
    date: "September</br> 5, 2020",
    price: "$218.50",
    status: "Paid",
    transactionStatus: "Completed",
  },
  {
    id: "#874522647",
    date: "September</br> 5, 2020",
    price: "$218.50",
    status: "Pending",
    transactionStatus: "Processing",
  },
  {
    id: "#874522648",
    date: "September</br> 5, 2020",
    price: "$218.50",
    status: "Paid",
    transactionStatus: "Completed",
  },
];

function MyOrders({ searchTerm }) {
  const [tabClicked, setTabClicked] = useState(0);
  useEffect(() => {
    setTabClicked(status.findIndex((stat) => status.includes(stat)));
  }, []);
  return (
    <>
      <div className="w-full relative flex gap-1 sm:gap-6 px-4 py-3 bg-zinc-100 rounded-xl justify-start items-center ">
        {status.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setTabClicked(index);
            }}
            className={`px-[18px] py-3 rounded-lg justify-start items-center text-base font-medium  leading-tight${
              tabClicked === index ? "" : "text-zinc-600"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          className="absolute  w-[121px] h-[44px] rounded-lg  bg-primary transition-all duration-500 ease-in-out "
          style={{
            transform: `translatex(calc(${tabClicked * 100}% + ${
              24 * tabClicked
            }px))`,
          }}
        >
          <p className="px-4 py-2 text-white">{status[tabClicked]}</p>
        </button>
      </div>
      <div className="w-full inline-grid grid-cols-6 pl-[53px] mt-10">
        <div className="col-span-2">Order ID</div>
        <div className="col-span-1">Date</div>
        <div className="col-span-1">Price</div>
        <div className="col-span-2">Status</div>
      </div>
      {variations
        .filter(
          (_var) =>
            status[tabClicked] === _var.transactionStatus &&
            _var.id.includes(searchTerm)
        )
        .map((item, index) => (
          <div className="w-full group h-[78px] px-6 items-center gap-2 grid grid-cols-[1fr_5fr_4fr_4fr_4fr_2fr] rounded relative bg-zinc-100 mb-4 mt-6">
            <Link
              href={`/profile/my-orders/${item.id.replace("#", "")}`}
              className="top-0 left-0 w-full h-full absolute bg-transparent"
            ></Link>
            <input className="w-[12px] relative" type="checkbox"></input>
            <p>{item.id}</p>
            <p dangerouslySetInnerHTML={{ __html: item.date }}></p>
            <p className="pl-6">{item.price}</p>
            <div className="text-primary">{item.status}</div>
            <button className="translate-x-0 group-hover:translate-x-2 transition-all delay-100 duration-500 ease-out">
              <ChevtonRight color="#626262" />
            </button>
          </div>
        ))}
    </>
  );
}

export default MyOrders;
