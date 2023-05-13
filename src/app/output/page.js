import React from "react";
import Layout from "@/Components/Layout";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[40px] justify-center mb-[60px]">
        <div className="flex flex-row p-[42px] gap-[20px] w-[1240px] h-[155px] bg-[#262626] rounded-[10px]">
          <img src="goat.svg" className="h-[75px] w-[75px]" alt="" />
          <span className="font-bold text-[52px] text-[#D8FEE4]">VB’S DAO</span>
        </div>
        <div className="flex flex-row gap-[80px] p-[30px] min-h-[592px] w-[1240px] border-2 border-black rounded-[10px]">
          <div className="flex flex-col gap-[8px]">
            <span className="italic text-[#262626] text-opacity-40 text-[24px]">
              Enter Prompt here
            </span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-[1140px] h-[40px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
