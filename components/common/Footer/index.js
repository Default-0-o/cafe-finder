import FacebookLogo from "@/components/icons/FacebookLogo";
import InstagramLogo from "@/components/icons/InstagramLogo";
import LocationIcon from "@/components/icons/LocationIcon";
import TwitterLogo from "@/components/icons/TwitterLogo";
import YoutubeLogo from "@/components/icons/YoutubeLogo";
import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer>
            <div className="flex bg-[#1B4B66] justify-between md:px-16 md:pt-8  md:pb-16 flex-col lg:flex-row  px-4 py-6 ">
                <div className="flex flex-col md:flex-row pb-0 md:pb-6 ">
                    <div>
                        <div>
                            <p className="text-white text-base  md:pb-3 pb-2 font-medium">
                                Shop by Category
                            </p>
                        </div>
                        <ul className=" text-[#B6B6B6] text-base grid gap-2  font-medium relative ">
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Skincare
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Personal Care
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Handbags
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Apparels
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Watches
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Eye Wear
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Jewellery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:px-16 md:order-1 pt-6 md:pt-0">
                        <div>
                            <p className="text-white text-base md:pb-3 pb-2 font-medium">
                                Policy
                            </p>
                        </div>
                        <ul className=" text-[#B6B6B6] md:grid gap-2 text-base font-medium flex flex-wrap">
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none "
                                >
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none"
                                >
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none"
                                >
                                    Sitemap
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none"
                                >
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none"
                                >
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    EPR Compliance
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:pl-16  pt-9 md:pt-0 ">
                        <div>
                            <p className="text-white text-base md:pb-3 font-medium pb-2">
                                About
                            </p>
                        </div>
                        <ul className=" text-[#B6B6B6] text-base md:grid gap-2 font-medium flex flex-wrap">
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none "
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none "
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/"}
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in  border-r-2 border-slate-300 pr-2 md:border-none "
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="relative hover:text-[#f2f2f2] after:absolute after:left-0  after:bottom-[-2px] after:block after:bg-[#f2f2f2] after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 after:ease-in transition-all duration-300 ease-in "
                                    href={"/"}
                                >
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-14 md:pt-0  ">
                    <div className="flex pt-6 md:pt-6  w-[327] lg:justify-end justify-start  gap-4  border-t-2 border-[#639599] lg:border-none ">
                        <Link
                            target="_blank"
                            href={"https://www.facebook.com/"}
                            className="  rounded-[50%] bg-[#639599]  "
                        >
                            <FacebookLogo />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "https://www.instagram.com/kasranajafi?igsh=MWU2Mm1xNWMzdzQ4dQ%3D%3D&utm_source=qr"
                            }
                            className="  rounded-[50%] bg-[#639599] "
                        >
                            <InstagramLogo />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://www.twitter.com/"}
                            className="  rounded-[50%] bg-[#639599]"
                        >
                            <TwitterLogo />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://www.youtube.com/"}
                            className=" rounded-[50%] bg-[#639599]"
                        >
                            <YoutubeLogo />
                        </Link>
                    </div>

                    <div className="flex items-center lg:justify-end justify-start text-sm md:pt-8 pt-6 ">
                        <LocationIcon />
                        <p className="	font-weight: 500 text-white pl-2">
                            United States
                        </p>
                    </div>
                    <div className="md:pt-3 pt-[18px]">
                        <p className="font-medium text-[#B6B6B6] text-sm  ">
                            © 2021 | Cora Leviene All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
