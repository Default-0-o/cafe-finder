import Header from "@/components/common/Header";
import { Inter } from "next/font/google";
import "../components/common/Footer/index.js";
import Footer from "../components/common/Footer/index.js";
import Brands from "@/components/shopByBrandas/Brands.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
    <>
      <Header />
          
            {/* <main
                  className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
              ></main> */}
            <Brands />
            <Footer />
        </>
      
  );
}
