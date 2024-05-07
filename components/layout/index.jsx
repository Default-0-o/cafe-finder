import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useRouter } from "next/router";
import LayoutPanel from "@/components/pages/profile/layoutpanel";

function Layout({ children }) {
    const router = useRouter();
    return (
        <>
            <Header />
            <main
                className={`flex min-h-screen flex-col items-center justify-start px-5`}
            >
                {router.asPath.includes("/profile") ? (
                    <LayoutPanel>{children}</LayoutPanel>
                ) : (
                    children
                )}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
