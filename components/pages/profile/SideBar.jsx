import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SideBar({ navigations }) {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        setActiveIndex(
            navigations.findIndex((nav) =>
                router.asPath.toLowerCase().includes(nav.path.toLowerCase())
            )
        );
    }, [router]);
    return (
        <>
            <div className="flex flex-col pr-2 border bg-[#F1F1F1] rounded  font-medium text-base leading-5  relative px-2 ">
                {navigations.map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className={`flex items-center justify-between py-4 pl-2 h-[72px] leading-tight ${
                            router.asPath
                                .toLowerCase()
                                .includes(item.path.toLowerCase())
                                ? "text-cyan-900"
                                : "text-zinc-900"
                        }  
                            }`}
                    >
                        {item.title}
                        <span>
                            {router.asPath
                                .toLowerCase()
                                .includes(item.path.toLowerCase()) ? (
                                <ChevronRightIcon color="rgb(22, 78, 99)" />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </span>
                    </Link>
                ))}
                <span
                    className="bg-[#17494d] transition-all duration-500 ease-in-out rounded-lg h-[54px] w-1 absolute left-0 "
                    style={{
                        transform: `translateY(calc(${activeIndex * 100}% + ${
                            (activeIndex * 2 + 1) * 9
                        }px))`,
                    }}
                ></span>
            </div>
        </>
    );
}

export default SideBar;
