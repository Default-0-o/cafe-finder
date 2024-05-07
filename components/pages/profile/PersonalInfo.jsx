import DeleteIcon from "@/components/icons/DeleteIcon";
import FormProfile from "@/public/assets/images/FormProfile.png";
import React from "react";
import FormInformation from "./FormInformation";

function PersonalInfo() {
    return (
        <>
            <div className="text-[#13101E] text-xl leading-6 font-semibold border-b-2 flex justify-center sm:justify-start ">
                <p className="pb-2">Personal Information</p>
            </div>
            <div className="flex items-center gap-2 flex-col sm:flex sm:flex-row pt-6 ">
                <img className="" src={FormProfile.src} alt="" />
                <button className="border text-[#fff] bg-[#1B4B66] py-[10px] px-11 rounded-lg ">
                    Upload
                </button>
                <button className="flex items-center  border border-[#B00020] text-[#B00020] gap-2 py-[10px] px-[30px] rounded-lg">
                    <span>
                        <DeleteIcon />
                    </span>
                    Delete
                </button>
            </div>
            <FormInformation />
        </>
    );
}

export default PersonalInfo;
