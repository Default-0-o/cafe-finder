import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Big from "@/public/assets/images/bigbag.png";
import Small from "@/public/assets/images/smallbag.png";
import CaretLeft from "@/components/icons/CaretLeft";
import CaretRight from "@/components/icons/CaretRight";
import useWindowSize from "@/hooks/useWindowSize";
function ProductInfoImages() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [width] = useWindowSize();
  return (
    <div className="w-full  md:w-[calc(50%_-_12px)] gap-6 md:justify-start md:items-center">
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-6"
      >
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Big.src} />
        </SwiperSlide>
      </Swiper>
      {width > 768 ? (
        <Swiper
          onSwiper={setThumbsSwiper}
          navigation={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={false}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs_swiper w-full  max-w-[473px]  justify-start items-start gap-[31px] flex !px-10"
        >
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Big.src} />
          </SwiperSlide>
        </Swiper>
      ) : null}
    </div>
  );
}
export default ProductInfoImages;
