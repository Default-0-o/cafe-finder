import Search from "@/components/icons/Search";
import Link from "next/link";
import React from "react";

function Sidebar({ status, sideBarHandler }) {
  return (
    <div className="">
      {status && (
        <div
          onClick={() => sideBarHandler(false)}
          className="fixed top-0 left-0 w-full h-full bg-[#0000003f]"
        ></div>
      )}
      <div
        className={` fixed px-4 py-8 top-0 left-0 h-screen w-full bg-white max-w-[320px] text-zinc-900 text-sm font-medium font-['Inter'] leading-[18px] transition-all duration-300 ease-in-out ${
          status ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex gap-1  mb-10">
          <Search svgProps={{ width: "16px", height: "16px" }} />
          <input
            placeholder="Inter your products"
            className="rounded-sm"
          ></input>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href={""}>Handbags</Link>
          </li>
          <li>
            <Link href={""}>Watches</Link>
          </li>
          <li>
            <Link href={""}>Skincares</Link>
          </li>
          <li>
            <Link href={""}>Jewellery</Link>
          </li>
          <li>
            <Link href={""}>Apparels</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
