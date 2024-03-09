import React from "react";
import Bag from "@/public/assets/images/shoulder_bag_banner.png";
import ArrowRight from "@/components/icons/ArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import Button from "@/components/common/Button";

function SwipableBanners({ children }) {
  const [width] = useWindowSize();
  return (
    <>
      {width < 768 ? (
        <Swiper
          spaceBetween={8}
          slidesPerView={1}
          slidesPerGroup={1}
          className="!w-[calc(100vw-60px)]"
        >
          <SwiperSlide className="">
            <Link href="/" className="w-full">
              <div className="relative w-full flex justify-end items-center overflow-hidden py-6 rounded-2xl">
                <img
                  src={Bag.src}
                  alt="shoulder bag image"
                  className="absolute top-0 left-0 w-full h-full bg-fixed rounded object-cover"
                />

                <div className=" relative  max-w-[310px] w-full py-1 pl-3 -right-[62px] bg-neutral-200 bg-opacity-70 rounded-3xl backdrop-blur-[5px]">
                  <h2 className="w-full text-primary max-w-[177px] text-2xl font-extrabold font-['Inter'] leading-relaxed pl-2 pt-1  md:mb-1 mb-3">
                    Carry your Funk
                  </h2>

                  <p className=" w-full  text-primary max-w-[162px] text-xs font-medium leading-none pb-2 ">
                    Trendy handbags collection for your party animal
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="">
            <Link href="/" className="w-full">
              <div className="relative  w-full flex justify-end items-center overflow-hidden py-6 rounded-2xl">
                <img
                  src={Bag.src}
                  alt="shoulder bag image"
                  className="absolute top-0 left-0 w-full h-full bg-fixed rounded object-cover"
                />
                <div className=" relative w-full  max-w-[310px]  py-1 pl-3 -right-[62px] bg-neutral-200 bg-opacity-70 rounded-3xl backdrop-blur-[5px]">
                  <h2 className="w-full text-primary max-w-[177px] text-2xl font-extrabold  leading-relaxed pl-2 pt-1  md:mb-1 mb-3">
                    Carry your Funk
                  </h2>
                  <p className=" w-full text-primary max-w-[162px] text-xs font-medium leading-none pb-2">
                    Trendy handbags collection for your party animal
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="">
            <Link href="/" className="w-full">
              <div className="relative w-full flex justify-end items-center overflow-hidden py-6 rounded-2xl">
                <img
                  src={Bag.src}
                  alt="shoulder bag image"
                  className="absolute top-0 left-0 w-full h-full bg-fixed rounded object-cover"
                />

                <div className=" relative  max-w-[310px] w-full py-1 pl-3 -right-[62px] bg-neutral-200 bg-opacity-70 rounded-3xl backdrop-blur-[5px]">
                  <h2 className="w-full text-primary max-w-[177px] text-2xl font-extrabold leading-relaxed  pl-2 pt-1  md:mb-1 mb-3">
                    Carry your Funk
                  </h2>
                  <p className=" w-full text-primary max-w-[162px] text-xs font-medium leading-none pb-2">
                    Trendy handbags collection for your party animal
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="relative w-full flex justify-end items-center overflow-hidden py-[42px] rounded-3xl">
          <img
            src={Bag.src}
            alt="shoulder bag image"
            className="absolute top-0 left-0 w-full h-full bg-fixed rounded object-cover"
          />
          <div className=" relative w-full max-w-[210px] md:max-w-[759px]   py-6 pl-12 -right-[62px] bg-neutral-200 bg-opacity-70 rounded-3xl backdrop-blur-[5px]">
            <h2 className="w-full  text-primary text-6xl font-extrabold leading-[84px] sm:pl-12 pl-3  md:mb-1 mb-3">
              Carry your Funk
            </h2>
            <p className=" w-full text-primary max-w-[450px] text-[28px] font-medium md:leading-[38px]">
              Trendy handbags collection for your party animal
            </p>
            <div className="flex justify-center w-[180px]   mt-8 rounded">
              <Button
                preIcon={<ArrowRight />}
                onClick={() => {}}
                variant="primary"
                size={"lg"}
              >
                See more
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SwipableBanners;
