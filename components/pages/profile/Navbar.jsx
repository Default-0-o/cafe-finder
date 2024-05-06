import BreadCrumbs from "@/components/breadcrumb";
import Button from "@/components/common/Button";
import CaretLeft from "@/components/icons/CaretLeft";
import Logout from "@/components/icons/Logout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Navbar({ navigations, setSearchTerm }) {
  const [pagetitle, setPageTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (navigations && navigations.length) {
      if (
        router.asPath.toLowerCase().includes("my-orders") &&
        router.query?.orderId
      )
        setPageTitle("Order#" + router.query.orderId);
      else
        setPageTitle(
          navigations.find((element) => element?.path === router.asPath)?.title
        );
    }
  }, [router]);
  return (
    <>
      <div className="w-full pb-7">
        <BreadCrumbs />
      </div>

      <div className="w-full flex flex-col xs:flex-row  justify-between items-center">
        <h1 className="w-full text-center xs:text-start font-semibold leading-[44px] text-2xl md:text-4xl text-[#1B4B66]">
          {pagetitle}
        </h1>
        {router.pathname === "/profile/personal-information" ? (
          <Button
            preIcon={<Logout />}
            onClick={() => {}}
            variant={"outline"}
            size={"sm"}
            customClass={"!p-[9px] md:p-[0px] md:sm"}
          >
            Logout
          </Button>
        ) : router.pathname === "/profile/my-orders" ? (
          <div className="flex items-center justify-start gap-2">
            <span>
              <CaretLeft />
            </span>
            <input
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="px-2 py-[10px] h-10 bg-zinc-100 rounded"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Navbar;
