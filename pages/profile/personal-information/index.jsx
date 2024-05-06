import React, { useState } from "react";
import ProfilePicture from "@/public/assets/images/profile-picture.png";
import Button from "@/components/common/Button";
import Delete from "@/components/icons/Delete";
import Eye from "@/components/icons/Eye";
import Unvisiable from "@/components/icons/Unvisiable";

function PersonalInformation() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {};
  return (
    <>
      <div className="text-zinc-900 text-center md:text-start  text-xl font-semibold font-['Inter'] leading-relaxed py-3 mb-6 ">
        Personal Information
      </div>
      <div className="flex md:flex-row flex-col items-center md:items-end gap-4 mb-6">
        <div className="w-[80px] rounded">
          <img
            className="w-[80px] "
            src={ProfilePicture.src}
            alt="picture of your profile"
          />
        </div>
        <div className="flex gap-4">
          <Button onClick={() => {}} size={"sm"} variant={"primary"}>
            Upload
          </Button>
          <button className="w-[136px] h-11 px-2 py-2.5 bg-white text-center text-red-700 text-sm font-medium font-['Inter'] leading-[18px] rounded-lg border-2 border-red-700 justify-center items-center gap-2 inline-flex">
            <span>
              <Delete />
            </span>
            Delete
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-9  w-full max-w-[874px]">
          <div className=" col-span-9  flex flex-col md:gap-2 md:col-span-3">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-tight pr-3">
              First Name
            </p>
            <input
              required
              placeholder="John"
              className="w-full pl-4 pr-3 py-4 bg-zinc-100 rounded"
            ></input>
          </div>
          <div className="w-full flex flex-col row-start-2 col-span-9 gap-2 md:col-start-4 md:row-start-1 md:col-span-3 md:pl-3">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-tight">
              Last Name
            </p>
            <input
              required
              placeholder="Doe"
              className="w-full pl-4 pr-3 py-4 bg-zinc-100 rounded"
            ></input>
          </div>
          <div className="flex flex-col col-span-9 gap-2 md:row-start-2 md:col-span-6">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-tight">
              Email
            </p>
            <input
              required
              placeholder="Johndoe@johndoe.com"
              className="pl-4 pr-3 py-4 bg-zinc-100 rounded"
            ></input>
          </div>
          <div className="row-start-4 col-span-9 md:row-start-3">
            <p className=" w-[120px] text-zinc-900 text-base font-medium font-['Inter'] leading-tight">
              Mobile Number
            </p>
          </div>
          <div className="col-span-3 md:row-start-4 md:col-span-1 md:col-start-1">
            <input
              required
              type="number"
              placeholder="+11"
              className="pl-4 pr-3 py-4 bg-zinc-100 rounded w-full"
            ></input>
          </div>
          <div className="col-span-6 ml-1 md:col-span-3 md:row-start-4">
            <input
              required
              type="number"
              placeholder="202-555-0114"
              className="pl-4 pr-3 py-4 bg-zinc-100 rounded w-full"
            ></input>
          </div>
          <div className=" flex flex-col col-span-9 gap-2  row-start-6 md:col-span-3">
            <p className="text-zinc-900 text-base font-medium font-['Inter'] leading-tight pt-[27px]">
              Date of birth
            </p>
            <input
              required
              type="date"
              placeholder="DD/MM/YYYY"
              className=" pl-4 pr-3 py-4 bg-zinc-100 rounded"
            ></input>
          </div>
        </div>
        <div className="py-4 mt-[40px] border-b-2 border-slate-200 border-opacity-100">
          <p className="text-zinc-900 text-xl font-semibold font-['Inter'] leading-relaxed">
            Change Password
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-6 mb-[96px] ">
          <div>
            <p>Current Password</p>
            <input
              required
              type="password"
              placeholder="********"
              className="w-full min-w-[287px] md:w-[287px] h-[52px] pl-4 pr-3 py-4 bg-zinc-100 rounded"
            ></input>
          </div>
          <div className="">
            <p>New Password</p>
            <div className="w-full min-w-[287px] md:w-[287px] h-14 pl-4 pr-3 py-4 bg-zinc-100 rounded justify-between md:justify-start items-center gap-3 inline-flex">
              {showPassword === true ? (
                <input
                  required
                  type="text"
                  placeholder="12345"
                  className=" bg-zinc-100"
                ></input>
              ) : (
                <input
                  required
                  type="password"
                  placeholder="********"
                  className=" bg-zinc-100"
                ></input>
              )}
              {showPassword === true ? (
                <button
                  type="button"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  <Eye />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  <Unvisiable />
                </button>
              )}
            </div>
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              required
              type="password"
              placeholder="********"
              className="w-full min-w-[287px] md:w-[287px] h-[52px] pl-4 pr-3 py-4 bg-zinc-100 rounded"
            ></input>
          </div>
        </div>
        <div className="flex w-full justify-end mb-9 md:pr-[76px]">
          <Button onClick={() => {}} size={"sm"} variant={"primary"}>
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}

export default PersonalInformation;
