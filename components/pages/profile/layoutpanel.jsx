import React, { Children, cloneElement, useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

function LayoutPanel({ children }) {
    const navigations = [
        {
            id: 1,
            title: "Personal Information",
            path: "/profile/personal-information",
        },
        {
            id: 2,
            title: "Refer and Earn",
            path: "/profile/refer-and-earn",
        },
        {
            id: 3,
            title: "My Orders",
            path: "/profile/my-orders",
        },
        {
            id: 4,
            title: "My Wishlist",
            path: "/profile/my-wishlist",
        },
        {
            id: 5,
            title: "My Reviews",
            path: "/profile/my-Reviews",
        },
        {
            id: 6,
            title: "My Address Book",
            path: "/profile/my-address-book",
        },
        {
            id: 7,
            title: "My Saved Cards",
            path: "/profile/my-saved-cards",
        },
    ];
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div className="pb-7 pt-8 ">
                <Navbar
                    searchTerm={searchTerm}
                    searchTermHandler={(_value) => setSearchTerm(_value)}
                    navigations={navigations}
                />
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-1 lg:block hidden">
                    <SideBar navigations={navigations} />
                </div>
                <div className="lg:col-span-3 col-span-4 lg:pl-5">
                    {Children.map(children, (child) =>
                        cloneElement(child, { searchTerm: searchTerm })
                    )}
                </div>
            </div>
        </>
    );
}

export default LayoutPanel;
