"use client";
import React from "react";
import AvatarUpload from "../Uploads/AvatarUpload";
import Link from "next/link";

const CreateForm = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-[80px]">
        <div className="flex flex-row gap-[38px]">
          <div className="flex flex-col">
            <AvatarUpload />
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-row">
              <div className="flex flex-col gap-[8px]">
                <span className=" text-[#262626] text-opacity-40 text-[24px]">
                  Name
                </span>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-[614px] h-[40px]"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col gap-[8px]">
                <span className=" text-[#262626] text-opacity-40 text-[24px]">
                  Description
                </span>
                <textarea
                  className="textarea textarea-bordered w-[614px] h-[104px]"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[34px]">
          <div className="flex flex-row">
            <div className="flex flex-col gap-[8px]">
              <span className=" text-[#262626] text-opacity-40 text-[24px]">
                Token Symbol
              </span>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-[354px] h-[40px]"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col gap-[8px]">
              <span className=" text-[#262626] text-opacity-40 text-[24px]">
                Token Supply
              </span>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-[354px] h-[40px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className=" text-[#262626] text-opacity-40 text-[24px] mb-[12px]">
            Royalty Split
          </span>
          <div className="flex flex-row gap-[34px]">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className=" text-[#262626] text-opacity-40 text-[16px]">
                  Admin
                </span>
                <label className="input-group">
                  <span>%</span>
                  <input
                    type="text"
                    className="input input-bordered w-[310px] h-[40px]"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className=" text-[#262626] text-opacity-40 text-[16px]">
                  Contributor
                </span>
                <label className="input-group">
                  <span>%</span>
                  <input
                    type="text"
                    className="input input-bordered w-[310px] h-[40px]"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className=" text-[#262626] text-opacity-40 text-[16px]">
                  Storage Provider
                </span>
                <label className="input-group">
                  <span>%</span>
                  <input
                    type="text"
                    className="input input-bordered w-[310px] h-[40px]"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <Link href="/bounty">
            <button className="rounded-[6px] text-[#262626] text-[18px] w-[309px] h-[40px] bg-[#D8FEE4] border-0">
              Done
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
