import React from "react";

const Member = () => {
  return (
    <div className="flex flex-row gap-[14px] mb-[25px]">
      <div className="">
        <img
          src="/address.svg"
          className="rounded-full border-black border-[1px] mx-[10px]"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[16px]">John Doe</span>
        <span className="italic text-[13px]">Owner</span>
      </div>
    </div>
  );
};

export default Member;
