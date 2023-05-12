import React from "react";
import Member from "../UI/Member";

const Members = () => {
  return (
    <div className="flex flex-row px-[60px] py-[30px]">
      <div className="w-[340px] flex flex-col">
        <span className="font-bold text-[20px] mb-[14px]">Owners</span>
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
      <div className="w-[340px] flex flex-col">
        <span className="font-bold text-[20px] mb-[14px]">Volunteers</span>
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
      <div className="w-[340px] flex flex-col">
        <span className="font-bold text-[20px] mb-[14px] opacity-0">
          Hidden
        </span>
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </div>
  );
};

export default Members;
