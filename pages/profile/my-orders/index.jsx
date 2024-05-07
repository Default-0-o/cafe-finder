import Orders from "@/components/pages/profile/Orders";
import React from "react";

function myorders({ searchTerm }) {
    return (
        <>
            <Orders searchTerm={searchTerm} />
        </>
    );
}

export default myorders;
