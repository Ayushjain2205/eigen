"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { InputNumber } from "antd";
import BountyUpload from "../Uploads/BountyUpload";

const BountyForm = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };

  const router = useRouter();

  return (
    <div className="">
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-row gap-[38px]">
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-row">
              <div className="flex flex-col gap-[8px]">
                <span className=" text-[#262626] text-opacity-40 text-[24px]">
                  What are you collecting?
                </span>
                <textarea
                  className="textarea textarea-bordered w-[614px] h-[104px]"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col gap-[8px]">
                <span className=" text-[#262626] text-opacity-40 text-[24px]">
                  Number of target images
                </span>
                <InputNumber
                  min={1}
                  max={10000}
                  defaultValue={100}
                  onChange={onChange}
                  className="input input-bordered w-[614px] h-[40px] flex items-center hover:border-[#262626] hover:border-opacity-40"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className=" text-[#262626] text-opacity-40 text-[24px] mb-[8px]">
              Add reference images
            </span>
            <BountyUpload />
          </div>
        </div>

        <div className="flex flex-col">
          <span className=" text-[#262626] text-opacity-40 text-[24px] mb-[32px]">
            Bounty
          </span>
          <div className="flex flex-row gap-[34px]">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className=" text-[#262626] text-opacity-40 text-[16px]">
                  Admin
                </span>
                <span className="italic text-[#262626] text-opacity-40 text-[16px] mb-[9px]">
                  For fine tuning the model
                </span>
                <label className="input-group">
                  <span>%</span>
                  <InputNumber
                    min={0}
                    max={10}
                    defaultValue={5}
                    className="input input-bordered w-[310px] h-[40px] flex items-center hover:border-[#262626] hover:border-opacity-40 overflow-hidden"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className=" text-[#262626] text-opacity-40 text-[16px]">
                  Contributor
                </span>
                <span className="italic text-[#262626] text-opacity-40 text-[16px] mb-[9px]">
                  For each legitimate contribution made
                </span>
                <label className="input-group">
                  <span>%</span>
                  <InputNumber
                    min={0}
                    max={10}
                    defaultValue={5}
                    className="input input-bordered w-[310px] h-[40px] flex items-center hover:border-[#262626] hover:border-opacity-40 overflow-hidden"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className=" text-[#262626] text-opacity-40 text-[16px]">
                  Storage Provider
                </span>
                <span className="italic text-[#262626] text-opacity-40 text-[16px] mb-[9px]">
                  For each contribution claimed
                </span>
                <label className="input-group">
                  <span>%</span>
                  <InputNumber
                    min={0}
                    max={10}
                    defaultValue={5}
                    className="input input-bordered w-[310px] h-[40px] flex items-center hover:border-[#262626] hover:border-opacity-40 overflow-hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <button
            // onClick={() => {
            //   signMessage({ message: "Creating VB's DAO" });
            //   const timer = setTimeout(() => {
            //     router.push("/dashboard");
            //   }, 5000);
            //   return () => clearTimeout(timer);
            // }}
            className="rounded-[6px] text-[#262626] text-[18px] w-[309px] h-[40px] bg-[#FEC7C7] border-0"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BountyForm;
