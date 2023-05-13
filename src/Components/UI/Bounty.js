import React from "react";

const Bounty = ({ img, address }) => {
  return (
    <div className="flex flex-col h-[249px] w-[327px] border-black border-2 rounded-[10px]">
      <div className="h-[203px] p-[13px] flex justify-center">
        <img className="max-h-[178px] max-w-[303px]" src={img} alt="" />
      </div>
      <div className="flex flex-row px-[14px] py-[11px] items-center justify-between border-black h-[46px] border-t-2 border-b-2 rounded-[8px]  bg-[#0BD069]">
        <p className="w-full text-center text-[16px]"> Claim</p>
      </div>
    </div>
  );
};

export default Bounty;
