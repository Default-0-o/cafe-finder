import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import LayoutPanel from "../pages/profile/LayoutPanel";
import { useRouter } from "next/router";

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
