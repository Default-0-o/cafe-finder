import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";

function Navbar({ navigations, searchTermHandler }) {
    const [pageTitle, setPageTitle] = useState("");
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
                    navigations.find(
                        (element) => element?.path === router.asPath
                    )?.title
                );
        }
    }, [router.asPath]);
    return (
        <>
            <Breadcrumbs />
            <div className="flex flex-col gap-2 items-center sm:flex-row sm:justify-between  ">
                <h1 className="font-semibold sm:leading-[44px] sm:text-4xl text-2xl xs:text-xl text-[#1B4B66] ">
                    {pageTitle}
                </h1>
                {router.pathname === "/profile/personal-information" ? (
                    <div className="lg:pr-[76px]">
                        <button className="flex items-center gap-2 border px-6 py-2 border-[#1B4B66] rounded-xl text-[#1B4B66] hover:">
                            <span>
                                <LogoutIcon />
                            </span>
                            Logout
                        </button>
                    </div>
                ) : (
                    <></>
                )}
                {router.pathname === "/profile/my-orders" ? (
                    <div className="flex items-center gap-2 ">
                        <span>
                            <ChevronLeftIcon />
                        </span>
                        <input
                            className="py-[10px] bg-[#F1F1F1] pl-2  font-medium text-base text-[#626262] min-w-[296px] min-h-10 rounded "
                            type="search"
                            placeholder="Search"
                            onChange={(e) => {
                                searchTermHandler(e.target.value);
                            }}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Navbar;
