import CheckboxIcon from "@/components/icons/CheckboxIcon";
import CheckedboxIcon from "@/components/icons/CheckedboxIcon";
import NegativeIcon from "@/components/icons/NegativeIcon";
import PlusIcon from "@/components/icons/PlusIcon";
import React, { useState } from "react";

function ProductsGridFiltersItem({
    label,
    options,
    filterHandler,
    slug,
    selectedFilters,
}) {
    const [accordionOpen, setAccodionOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setAccodionOpen((prevState) => !prevState)}
                className="w-full flex justify-between "
            >
                <span>{label}</span>
                {accordionOpen ? (
                    <span>
                        <NegativeIcon />
                    </span>
                ) : (
                    <span>
                        <PlusIcon />
                    </span>
                )}
            </button>
            <div
                className={` overflow-hidden transition-all duration-300 ease-in-out grid-rows-[1fr] ${
                    accordionOpen ? ` grid` : `hidden`
                } `}
            >
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => filterHandler(slug, option.id)}
                        className="flex items-center gap-2 py-[10px] "
                    >
                        {selectedFilters &&
                        selectedFilters[slug] &&
                        selectedFilters[slug].includes(option.id) ? (
                            <span>
                                <CheckedboxIcon />
                            </span>
                        ) : (
                            <span>
                                <CheckboxIcon />
                            </span>
                        )}

                        <span className="capitalize">{option.label}</span>
                    </button>
                ))}
            </div>
        </>
    );
}

export default ProductsGridFiltersItem;
