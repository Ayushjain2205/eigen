import React from "react";

const BoxHeader = ({ children, title }) => {
  return (
    <div className="flex flex-col h-[592px] w-[1214px] border-2 border-black rounded-[10px]">
      <div className="h-[88px] border-b-2 border-black flex items-center px-[32px]">
        <span className="font-bold text-[24px]">{title}</span>
      </div>
      <div className="p-10">{children}</div>
    </div>
  );
};

export default BoxHeader;
