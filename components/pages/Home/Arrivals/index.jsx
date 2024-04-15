import React from "react";
import Black from "@/public/assets/images/black_bag.png";
import Brown from "@/public/assets/images/brown_bag.png";
import Red from "@/public/assets/images/redbag.png";
import Pink from "@/public/assets/images/pink_bag.png";
import Yellow from "@/public/assets/images/yellow_bag.png";
import Heart from "@/components/icons/Heart";
import Button from "@/components/common/Button";
import ChevtonRight from "@/components/icons/ChevtonRight";
import useWindowSize from "@/hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
const products = [
    {
        id: 1,
        title: "Grande",
        subTitle: "Blossom Pouch",
        price: "$39.49",
        image: Red.src,
        route: "/",
    },
    {
        id: 2,
        title: "Coach",
        subTitle: "Leather Coach Bag",
        price: "$56.49",
        image: Red.src,
        route: "/",
    },

    {
        id: 3,
        title: "Remus",
        subTitle: "Blossom Pouch",
        price: "$54.69",
        image: Red.src,
        route: "/",
    },

    {
        id: 4,
        title: "Boujee",
        subTitle: "Black Bag",
        price: "$57.00",
        image: Red.src,
        route: "/",
    },
];
function Arrivals() {
    const [width] = useWindowSize();
    return (
        <>
            <div className=" w-full flex justify-between py-4">
                <p className="text-zinc-900 md:text-[34px] text-sm  font-semibold font-['Inter'] leading-none">
                    New Arrivals
                </p>
                <Button
                    postIcon={<ChevtonRight />}
                    onClick={() => {}}
                    variant="link"
                    size={"sm"}
                >
                    View All
                </Button>
            </div>

            {width < 768 ? (
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    className="!w-[calc(100vw-60px)]"
                    breakpoints={{
                        600: {
                            slidesPerView: 2.2,
                        },
                        420: {
                            slidesPerView: 2,
                        },
                        380: {
                            slidesPerView: 1.6,
                        },
                        280: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {products.map((item, index) => (
                        <SwiperSlide className="">
                            <div
                                key={index}
                                className="w-full  flex-col justify-start gap-4 inline-flex"
                            >
                                <Link href={item.route}>
                                    {" "}
                                    <img
                                        src={item.image}
                                        alt="Pink bag image"
                                    />
                                </Link>
                                <div className="flex justify-between">
                                    <p className="text-zinc-900 text-base font-medium leading-tight">
                                        {item.title}
                                    </p>
                                    <Heart />
                                </div>
                                <p className="text-zinc-600 text-sm font-normal leading-tight">
                                    {item.subTitle}
                                </p>
                                <p className="text-zinc-900 text-base font-medium leading-tight">
                                    {item.price}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex justify-start items-start gap-10 pl-5 py-3">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[286px] max-h-[371px] flex-col justify-start gap-4 inline-flex"
                        >
                            <Link href={item.route}>
                                <img src={item.image} alt="Pink bag image" />{" "}
                            </Link>
                            <div className="flex justify-between">
                                <p className="text-zinc-900 text-base font-medium leading-tight">
                                    {item.title}
                                </p>
                                <Heart />
                            </div>
                            <p className="text-zinc-600 text-sm font-normal leading-tight">
                                {item.subTitle}
                            </p>
                            <p className="text-zinc-900 text-base font-medium leading-tight">
                                {item.price}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Arrivals;
