"use client";
import React from "react";
import Layout from "@/Components/Layout";
import FileUpload from "@/Components/Uploads/FileUpload";
import BoxHeader from "@/Components/UI/BoxHeader";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center">
        <BoxHeader title="Upload your contribution">
          <FileUpload />
          <div className="gap-[16px] flex flex-row justify-end mt-[280px]">
            <button className="rounded-[6px] text-[#262626] text-[18px] w-[223px] h-[60px] bg-[#fff] border-[1px] border-black">
              Cancel
            </button>
            <button className="rounded-[6px] text-[#262626] text-[18px] w-[223px] h-[60px] bg-[#FEC7C7] border-[1px] border-black">
              Submit
            </button>
          </div>
        </BoxHeader>
        <progress className="progress w-[1214px] hidden"></progress>
      </div>
    </Layout>
  );
};

export default page;
