import { Inter } from "next/font/google";
import "../components/common/Footer/index.js";
import Brands from "@/components/shopByBrandas/Brands.jsx";
import Banner from "@/components/banner/index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            {/* <main
                  className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
              ></main> */}
            <Brands />
            <Banner />
        </>
    );
}
