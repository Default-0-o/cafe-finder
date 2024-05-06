import React from "react";
import ProductsGridFiltersItem from "./ProductsGridFiltersItem";

function ProductsGridFilters({ filters, filterHandler, selectedFilters }) {
    return (
        <>
            <div className=" pr-8  pb-28  md:block hidden ">
                <ul>
                    {filters.map((_filter) => (
                        <li
                            key={_filter.id}
                            className="py-4 border-b-2 max-w-[286px]  "
                        >
                            <ProductsGridFiltersItem
                                selectedFilters={selectedFilters}
                                label={_filter.label}
                                slug={_filter.slug}
                                options={_filter.options}
                                filterHandler={filterHandler}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ProductsGridFilters;
