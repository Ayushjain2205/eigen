import Link from "next/link";
import React from "react";
import { data } from "../../utils/DAOs";

const ExploreCard = ({ index }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-[512px] w-[672px] border-black border-[2px] rounded-[10px] bg-[${data[index].color}]`}
    >
      <img src={data[index].image} className="mb-[24px]" alt="" />
      <span className="font-bold text-[32px] mb-[16px]">
        {data[index].name}
      </span>
      <span className="w-[320px] text-[#2D3436] text-[16px] mb-[8px]">
        {data[index].description}
      </span>
      <span className="font-medium text-[24px] mb-[30px]">
        Members : {data[index].members}
      </span>
      <Link href="/dashboard">
        <button className="rounded-[6px] text-[18px] text-[#f5f5f5] w-[330px] h-[40px] bg-[#262626] border-0">
          Request to join
        </button>
      </Link>
    </div>
  );
};

export default ExploreCard;
