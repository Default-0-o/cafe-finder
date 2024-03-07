import Header from "@/components/common/Header";
import Arrivals from "@/components/pages/Home/Arrivals";
import SwipableBanners from "@/components/pages/Home/SwipableBanners/Index";
import Button from "@/components/common/Button";
import { Inter } from "next/font/google";
import ArrowRight from "@/components/icons/ArrowRight";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

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
    </>
  );
}
