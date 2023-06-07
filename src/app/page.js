import React from "react";
import Layout from "@/Components/Layout";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col pt-[40px] gap-[20px] justify-center pb-[60px] pl-[60px] bg-[#D8FEE4]">
        <div className="text-[64px]">&nbsp; space for</div>
        <div className="flex items-center text-[96px] h-[166px] w-[600px] bg-[#CBB3F2] border-black border-[3px] rounded-[40px] pl-[32px]">
          creativity.
        </div>
        <div className="flex items-center text-[96px] h-[166px] w-[800px] bg-[#FEC7C7] border-black border-[3px] rounded-[40px] pl-[32px]">
          ownership.
        </div>
        <div className="flex items-center text-[96px] h-[166px] w-[1000px] bg-[#FFDD67] border-black border-[3px] rounded-[40px] pl-[32px]">
          collaboration.
        </div>
        <div className="flex flex-row justify-between items-center w-[1190px] mt-[40px]">
          <div className="flex flex-row items-center gap-[10px]">
            <img className="h-[74px] w-[74px]" src="/eigen-logo.svg" alt="" />
            <span className="text-[64px] font-medium">eigen</span>
          </div>
          <div className="text-[36px] font-medium">by entropy labs.</div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
