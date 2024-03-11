import Header from "@/components/common/Header";
import Arrivals from "@/components/pages/Home/Arrivals";
import SwipableBanners from "@/components/pages/Home/SwipableBanners/Index";
import Button from "@/components/common/Button";
import "../components/common/Footer/index.js";
import Brands from "@/components/shopByBrandas/Brands.jsx";
import ArrowRight from "@/components/icons/ArrowRight";
import Banner from "@/components/banner/index.js";

export default function Home() {
  return (
    <>
      <SwipableBanners />
      <Arrivals />
      {/*<Button
          preIcon={<ArrowRight />}
          onClick={() => {}}
          variant="outline"
          // disabled
          size={"lg"}
        >
          Fuck Me!
  </Button>*/}
      <Brands />
    </>
  );
}
