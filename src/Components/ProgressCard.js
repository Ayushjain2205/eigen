import React from "react";

const ProgressCard = () => {
  return (
    <div className="h-[139px] w-[1150px] py-[20px] px-[30px] mt-[40px] bg-[#D8FEE4] border-black border-2 rounded-[10px]">
      <div className="flex flex-row justify-between font-medium">
        <span className="text-[48px]">Contributions</span>
        <span className="text-[48px]">2000/5000</span>
      </div>
      <div className="flex flex-row w-[1100px] h-[8px] bg-[#101010]">
        <div className="w-[526px] bg-[#FEC7C7]"></div>
      </div>
    </div>
  );
};

export default ProgressCard;
