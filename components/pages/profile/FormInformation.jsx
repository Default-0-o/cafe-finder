import EyeIcon from "@/components/icons/EyeIcon";
import EyeOffIcon from "@/components/icons/EyeOffIcon";
import React, { useState } from "react";

function FormInformation() {
    const [eyeOpen, setEyeOpen] = useState(true);
    return (
        <form action="">
            <div className="grid grid-cols-9  pt-6 text-base font-medium leading-5 gap-x-2 gap-y-2 pb-10">
                <div className="col-span-9 sm:col-span-3 sm:pr-3">
                    <p className="text-[#171520] pb-2">First name</p>
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 w-full rounded "
                        type="text"
                        placeholder="John"
                    />
                </div>
                <div className="col-span-9 col-start-1 sm:col-span-3 sm:pl-3">
                    <p className="text-[#171520] pb-2">Last Name</p>
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 w-full rounded"
                        type="text"
                        placeholder="Doe"
                    />
                </div>
                <div className="col-span-9 sm:col-span-6 ">
                    <p className="text-[#171520] pb-2">Email</p>
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 w-full rounded"
                        type="email"
                        placeholder="Johndoe@johndoe.com"
                    />
                </div>
                <div className="col-start-1 col-span-9  ">
                    <p className="text-[#171520]  text-base font-medium leading-5">
                        Mobile Number
                    </p>
                </div>
                <div className="col-start-1 col-span-2 sm:col-span-1 ">
                    <input
                        className="bg-[#F1F1F1] text-[#626262] w-full  p-4 rounded"
                        type="number"
                        placeholder="+11"
                    />
                </div>
                <div className="col-start-3 col-span-7 sm:col-span-5 sm:col-start-2 ">
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-4 w-full  rounded"
                        type="number"
                        placeholder="202-555-0114"
                    />
                </div>
                <div className="col-span-9  sm:col-span-3 sm:col-start-1 col-start-1 pt-5">
                    <p className="text-[#171520] pb-2">Date of birth</p>
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 w-full rounded"
                        type="date"
                        placeholder="DD/MM/YYYY"
                    />
                </div>
            </div>
            <div className=" text-[#13101E] font-semibold text-xl leading-7 py-4 ">
                <p className="pb-2 border-b-2 ">Change Password</p>
            </div>
            <div className="grid col-3 gap-y-4 pb-8">
                <div className="col-span-1">
                    <p className="pb-2">Current Password</p>
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 rounded"
                        type="password"
                        placeholder="********"
                    />
                </div>
                <div className="col-span-1 max-w-[256px]">
                    <p className="pb-2">New Password</p>
                    {eyeOpen ? (
                        <div className="flex items-center bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 rounded ">
                            <input
                                className="bg-[#F1F1F1] text-[#626262] max-w-[205px]"
                                type="password"
                                placeholder="********"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setEyeOpen((prevState) => !prevState)
                                }
                                className=" pr-3"
                            >
                                <EyeOffIcon />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 rounded ">
                            <input
                                className="bg-[#F1F1F1] text-[#626262] max-w-[205px]"
                                placeholder=""
                                type=""
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setEyeOpen((prevState) => !prevState)
                                }
                                className=" pr-3"
                            >
                                <EyeIcon />
                            </button>
                        </div>
                    )}
                </div>
                <div className="col-span-1">
                    <p className="pb-2">Confirm Password</p>
                    <input
                        className="bg-[#F1F1F1] text-[#626262] py-4 pl-4 pr-6 rounded"
                        type="password"
                        placeholder="********"
                    />
                </div>
            </div>
            <div className="flex justify-end items-center pb-9 sm:pr-[76px]">
                <button className="p-2 bg-[#1B4B66] text-[#fff] leading-5 font-medium text-base  rounded-lg">
                    Save Changes
                </button>
            </div>
        </form>
    );
}

export default FormInformation;
