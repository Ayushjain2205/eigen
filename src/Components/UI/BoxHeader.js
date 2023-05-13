import React from "react";

const BoxHeader = ({ children, title, bg }) => {
  return (
    <div className="flex flex-col z-1 min-h-[592px] w-[1214px] border-2 border-black rounded-[10px]">
      <div
        className={`h-[88px] border-b-2 border-black rounded-t-[10px] flex items-center px-[32px] z-0 ${
          bg ? `bg-[${bg}]` : ""
        }`}
      >
        <span className="font-bold text-[24px]">{title}</span>
      </div>
      <div className="flex flex-col p-10">{children}</div>
    </div>
  );
};

export default BoxHeader;
