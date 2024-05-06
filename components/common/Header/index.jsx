import Logo from "@/components/icons/Logo";
import Search from "@/components/icons/Search";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Like from "@/components/icons/Like";
import User from "@/components/icons/User";
import Shop from "@/components/icons/Shop";
import Menu from "@/components/icons/Menu";
import Sidebar from "./Sidebar";
import useWindowSize from "@/hooks/useWindowSize";

function Header() {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setSideBarStatus(false);
    }
  }, [width]);

  return (
    <>
      <div className="flex justify-between gap-2 px-5 py-[18px]">
        <button
          onClick={() => setSideBarStatus((prevState) => !prevState)}
          className="md:hidden flex gap-5 mr-2"
        >
          <Menu />
        </button>
        <div className="flex sm:gap-2 lg:gap-5 mr-auto md:mr-0 ">
          <div className="lg:w-32 md:w-22 md:gap-2 sm:w-18 sm:gap-1 ">
            <Logo svgProps={{ className: "sm:w-15 lg:w-32 w-20" }} />
          </div>

          <div className="md:flex md:w-12 gap-1 sm:w-4 hidden xl:gap-8 text-zinc-900 sm:text-xs mt-0.5 md:p-0 lg:text-sm font-medium leading-none sm:leading-[18px]">
            <Link href={"/"}>
              <p>Handbags</p>
            </Link>
            <Link href={"/"}>
              <p>Watches</p>
            </Link>
            <Link href={"/"}>
              <p>Skincares</p>
            </Link>
            <Link href={"/"}>
              <p>Jewellery</p>
            </Link>
            <Link href={"/"}>
              <p>Apparels</p>
            </Link>
          </div>
        </div>

        {/* <Logo svgProps={{ className: "lg:w-32 md:w-20" }} /> */}
        <div className="flex gap-6  md:gap-1 sm:gap-0">
          <div className=" md:flex hidden sm:max-w-[120px] md:max-w-[280px] w-[280px] gap-3 bg-#f1f1f1 rounded">
            <button className="w-6 h-6 mx-2 sm:w-2">
              <Search />
            </button>

            <input
              className="  w-full"
              placeholder="Search for products or brands....."
            ></input>
          </div>
          <div className="flex xl:gap-5 gap-3  md:gap-1 ">
            <Like svgProps={{ className: "md:w-4 lg:w-6 xl:w-8" }} />
            <User svgProps={{ className: "md:w-4 lg:w-6 xl:w-8" }} />
            <Shop svgProps={{ className: "md:w-4 lg:w-6 xl:w-8" }} />
          </div>
        </div>
      </div>
      <Sidebar status={sideBarStatus} sideBarHandler={setSideBarStatus} />
    </>
  );
}

export default Header;
