import React, { Children, cloneElement, useState } from "react";
import ProfileSidebar from "./sidebar";
import Navbar from "./Navbar";

function LayoutPanel({ children }) {
    const navigations = [
        {
            id: 1,
            title: "Personal Information",
            path: "/profile/personal-information",
        },
        { id: 2, title: "Refer and Earn", path: "/profile/refer-and-ern" },
        { id: 3, title: "My Orders", path: "/profile/my-orders" },
        { id: 4, title: "My Wishlist", path: "/profile/my-wishlist" },
        { id: 5, title: "My Reviews", path: "/profile/my-reviews" },
        { id: 6, title: "My Address Book", path: "/profile/my-address-book" },
        { id: 7, title: "My Saved Cards", path: "my-saved-cards" },
    ];
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div className="w-full pt-7 pb-8 ">
                <Navbar
                    searchTerm={searchTerm}
                    searchTermHandler={(_value) => setSearchTerm(_value)}
                    navigations={navigations}
                />
            </div>
            <div className="grid grid-cols-4 md:gap-3 w-full">
                <div className="hidden  lg:col-span-1 lg:block">
                    <ProfileSidebar navigations={navigations} />
                </div>
                <div className="w-full col-span-4 lg:col-span-3">
                    {Children.map(children, (child) =>
                        cloneElement(child, { searchTerm: searchTerm })
                    )}
                </div>
            </div>
        </>
    );
}

export default LayoutPanel;
