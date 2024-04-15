import React, { useEffect, useState } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import CheckboxIcon from "@/components/icons/CheckboxIcon";
import CheckedboxIcon from "@/components/icons/CheckedboxIcon";
import NegativeIcon from "@/components/icons/NegativeIcon";
import ProductsGridFilters from "./ProductsGridFilters";
import Pagination from "./Pagination";
import ProducGridItem from "./ProducGridItem";
import SortGridProducts from "./SortGridProducts";
import SortTypeIcon from "@/components/icons/SortTypeIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import Breadcrumbs from "./Breadcrumbs";

const sortTypes = [
    {
        id: 1,
        title: "Latest Products",
    },
    {
        id: 2,
        title: "Price- Low to High",
    },
    { id: 3, title: "Price- High to Low" },
    { id: 4, title: "Popularity" },
    { id: 5, title: "Customer Ratings" },
];

function ProductsGrid({ products }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [currentPosts, setCurrentPosts] = useState([]);
    const [selectedSort, setSelectedSort] = useState(sortTypes[0]);

    const indexOfLastPage = currentPage * postPerPage;
    const indexOfFirstPage = indexOfLastPage - postPerPage;

    const filters = [
        {
            id: 1,
            label: "size",
            slug: "size",
            options: [
                {
                    label: "small",
                    id: 1,
                },
                {
                    label: "medium",
                    id: 2,
                },
                {
                    label: "large",
                    id: 3,
                },
            ],
        },
        {
            id: 2,
            label: "color",
            slug: "color",
            options: [
                {
                    label: "Blue",
                    id: 1,
                },
                {
                    label: "Maroon Red",
                    id: 2,
                },
                {
                    label: "Crimson Red",
                    id: 3,
                },
                {
                    label: "Seinna Pink",
                    id: 4,
                },
                {
                    label: "Teal",
                    id: 5,
                },
                {
                    label: "Aquamarine",
                    id: 6,
                },
                {
                    label: "Off-White",
                    id: 7,
                },
                {
                    label: "Muave Orange",
                    id: 8,
                },
            ],
        },
        {
            id: 3,
            label: "brand",
            slug: "brand",
            options: [
                {
                    label: "louis vuitton",
                    id: 1,
                },
                {
                    label: "versace",
                    id: 2,
                },
                {
                    label: "gucci",
                    id: 3,
                },
                {
                    label: "saint laurant",
                    id: 4,
                },
            ],
        },
        {
            id: 4,
            label: "price range",
            slug: "price_range",
            options: [
                {
                    label: "0$ ~ 49.99$",
                    id: 1,
                },
                {
                    label: "50$ ~ 99.99$",
                    id: 2,
                },
                {
                    label: "100$ ~ 199.99$",
                    id: 3,
                },
                {
                    label: "200$ ~ 499.99$",
                    id: 4,
                },
                {
                    label: "more than 500$",
                    id: 5,
                },
            ],
        },
        {
            id: 4,
            label: "discount",
            slug: "discount",
            options: [
                {
                    label: "0% ~ 24.99%",
                    id: 1,
                },
                {
                    label: "25% ~ 49.99%",
                    id: 2,
                },
                {
                    label: "50% ~ 74.99%",
                    id: 3,
                },
                {
                    label: "75% ~ 100%",
                    id: 4,
                },
            ],
        },
        {
            id: 4,
            label: "availablity",
            slug: "availablity",
            options: [
                {
                    label: "yes",
                    id: 1,
                },
                {
                    label: "no",
                    id: 2,
                },
            ],
        },
    ];

    const filterHandler = (_category, _id) => {
        const tempFilters = { ...selectedFilters };
        if (tempFilters[_category]) {
            if (tempFilters[_category].includes(_id))
                tempFilters[_category].splice(
                    tempFilters[_category].indexOf(_id),
                    1
                );
            else tempFilters[_category].push(_id);
        } else {
            tempFilters[_category] = [_id];
        }
        setSelectedFilters(tempFilters);
    };

    const sortedItems = () => {
        let temp = [...products];
        if (selectedSort.id === 2 || selectedSort.id === 3) {
            return temp.sort((a, b) => {
                const cmp = a.price - b.price;
                return selectedSort.id === 3 ? cmp * -1 : cmp;
            });
        } else if (selectedSort.id === 1) {
            return temp;
        } else if (selectedSort.id === 5) {
            return temp;
        } else return temp;
    };

    useEffect(() => {
        setCurrentPosts(
            sortedItems().slice(
                (currentPage - 1) * postPerPage,
                currentPage * postPerPage
            )
        );
    }, [selectedSort, currentPage]);

    return (
        <>
            <Breadcrumbs />
            <div className="grid grid-cols-4 ">
                <div className="md:col-span-1">
                    <ProductsGridFilters
                        filters={filters}
                        selectedFilters={selectedFilters}
                        filterHandler={filterHandler}
                    />
                </div>
                <div className="md:col-span-3  col-span-4 ">
                    <SortGridProducts
                        activeSort={selectedSort}
                        sortTypes={sortTypes}
                        onChange={(_sortOption) => setSelectedSort(_sortOption)}
                        postPerPage={postPerPage}
                        data={products}
                    />
                    <div className="grid md:gap-x-8 md:gap-y-[68px] grid-cols-[repeat(auto-fill,_minmax(284px,_1fr))] gap-x-[22px] gap-y-6  ">
                        {currentPosts.map((product) => (
                            <ProducGridItem key={product.id} data={product} />
                        ))}
                    </div>
                    <div className="flex items-center justify-around pb-5 md:hidden w-full ">
                        <button className="flex  hover:bg-[#1B4B66] duration-500 items-center rounded-lg w-1/2  justify-center gap-1">
                            <SortTypeIcon />
                            <span>SORT</span>
                        </button>
                        <button className="flex items-center hover:bg-[#1B4B66] rounded-lg duration-500  w-1/2 gap-1 justify-center">
                            <FilterIcon />
                            <span>FILTER</span>
                        </button>
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        postsPerPage={postPerPage}
                        totalPosts={products.length}
                    />
                </div>
            </div>
        </>
    );
}

export default ProductsGrid;
