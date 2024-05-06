import React from "react";

function SortPosition({ Positions }) {
    return (
        <button
            onChange={handleSortBy}
            onClick={() => setRadioActive(!radioActive)}
            value={Position.title}
            className={`w-[206px] font-medium  text-[#626262] leading-5 text-base flex gap-1   ${
                accordionOpen ? `` : `hidden`
            }`}
            key={Position.id}
        >
            {radioActive ? <RadioIcon /> : <RadioActiveIcon />}
            {Position.title}
        </button>
    );
}

export default SortPosition;
