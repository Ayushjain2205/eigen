import React from "react";

const Contribution = () => {
  return (
    <div className="flex flex-col h-[249px] w-[327px] border-black border-2 rounded-[10px]">
      <div className="h-[203px] p-[13px] flex justify-center">
        <img
          className="max-h-[178px] max-w-[303px]"
          src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Who_Is_Vitalik_Buterin.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-row px-[14px] py-[11px] items-center justify-between border-black h-[46px] border-t-2 rounded-tl-[8px] rounded-tr-[8px]">
        <span className="text-[16px]">by John Doe</span>
        <img src="/flag.svg" className="w-[24px] h-[24px]" alt="" />
      </div>
    </div>
  );
};

export default Contribution;
