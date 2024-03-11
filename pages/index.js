import Header from "@/components/common/Header";
import Arrivals from "@/components/pages/Home/Arrivals";
import SwipableBanners from "@/components/pages/Home/SwipableBanners/Index";
import Button from "@/components/common/Button";
import { Inter } from "next/font/google";
import "../components/common/Footer/index.js";
import Brands from "@/components/shopByBrandas/Brands.jsx";
import ArrowRight from "@/components/icons/ArrowRight";
import Banner from "@/components/pages/Home/banner/index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <main
                className={`flex min-h-screen flex-col items-center justify-start px-5 ${inter.className}`}
            >
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
            </main>
            <Brands />
            <Banner />
        </>
    );
}
