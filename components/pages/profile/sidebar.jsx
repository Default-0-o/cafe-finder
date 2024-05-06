import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import { useRouter } from "next/router";

function ProfileSidebar({ navigations }) {
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
      <div className="flex relative flex-col w-full max-w-[286px]  bg-zinc-100 rounded-lg px-4 ">
        {navigations.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex justify-between items-center py-4 h-[72px] text-base font-medium  leading-tight ${
              router.asPath.toLowerCase().includes(item.path.toLowerCase())
                ? "text-cyan-900"
                : "text-zinc-900"
            } ${
              router.asPath.toLowerCase().includes(item.path.toLowerCase())
                ? ""
                : ""
            }`}
          >
            {item.title}
            {router.asPath.toLowerCase().includes(item.path.toLowerCase()) ? (
              <span>
                <ChevronRightIcon color="#1B4B66" />
              </span>
            ) : (
              <span>
                <ChevronRightIcon color="#000" />
              </span>
            )}
          </Link>
        ))}
        <span
          className="absolute left-0 w-1 h-[54px] rounded-lg bg-[#17494D] transition-all duration-500 ease-in-out "
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

export default ProfileSidebar;
