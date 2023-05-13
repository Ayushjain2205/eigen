import React from "react";

const Member = ({ key, address, image, role }) => {
  return (
    <div className="flex flex-row gap-[14px] mb-[25px]">
      <div className="">
        <img
          src={image}
          className="rounded-full border-black border-[1px] mx-[10px]"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[16px]">
          {address.slice(0, 6) + "..." + address.slice(-4)}
        </span>
        <span className="italic text-[13px]">{role}</span>
      </div>
    </div>
  );
};

export default Member;
