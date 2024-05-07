import React from "react";

function ChevronRightIcon({ svgProps, color = "#000" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...svgProps}
        >
            <path
                d="M10 8L14 12L10 16"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ChevronRightIcon;
