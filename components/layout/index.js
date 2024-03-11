import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-start px-5`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
