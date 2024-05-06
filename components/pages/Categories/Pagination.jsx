import React, { useEffect, useState } from "react";

function Pagination({ postsPerPage, totalPosts, setCurrentPage, currentPage }) {
    const [pageNumber, setPageNumber] = useState([]);

    useEffect(() => {
        let temp = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            temp.push(i);
        }
        setPageNumber([...temp]);
    }, [totalPosts, postsPerPage]);

    const handelNext = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };
    const handePrevious = () => {
        setCurrentPage((currentPage) => currentPage - 1);
    };

    return (
        <>
            <nav className="md:flex md:gap-2 md:justify-start  md:pt-6 md:pb-[100px] md:items-center hidden">
                <div className="bg-[#F1F1F1] border leading-4 rounded-lg  ">
                    <button
                        onClick={handePrevious}
                        className={
                            currentPage <= 1
                                ? ` hidden`
                                : "px-5 py-[10px]  font-medium text-xs text-[#626262]"
                        }
                    >
                        Previous
                    </button>
                </div>
                <div>
                    <ul className="flex border bg-[#F1F1F1] max-w-[236px]  items-center justify-center rounded-lg gap-1 py-1 px-1 ">
                        {pageNumber.map((number) => (
                            <li
                                className=" text-[#626262]  font-medium leading-4 text-xs"
                                key={number}
                            >
                                <button
                                    onClick={() => setCurrentPage(number)}
                                    className={
                                        currentPage === number
                                            ? `bg-[#1B4B66] text-white px-[18px] py-[6px] rounded-lg`
                                            : "px-[18px] py-[6px]"
                                    }
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-[#F1F1F1] border leading-4 rounded-lg ">
                    <button
                        onClick={handelNext}
                        className={
                            currentPage >= 5
                                ? `hidden`
                                : "px-5 py-[10px]  font-medium text-xs text-[#626262]"
                        }
                    >
                        Next
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Pagination;
