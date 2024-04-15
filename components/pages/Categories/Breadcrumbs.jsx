import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import ChevronRightSmal from "@/components/icons/ChevronRightSmal";

function Breadcrumbs() {
    const router = useRouter();
    return (
        <>
            <div className="flex  font-medium leading-[18px] text-base gap-2">
                <button
                    className=" text-[#1B4B66] hover:underline  "
                    onClick={() => router.push("/")}
                >
                    Home
                </button>
                <ChevronRightSmal />
                <button className="#626262">Handbag</button>
            </div>
            <div className="md:pt-7 md:pb-10 pt-3 pb-6 text-[#1B4B66] font-semibold text-4xl leading-11">
                Handbags
            </div>
        </>
    );
}

export default Breadcrumbs;
