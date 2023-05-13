import React from "react";
import Bounty from "../UI/Bounty";
import { data } from "../../utils/Contributions";

const StorageBounties = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-between mt-[30px] mb-[20px]">
        <span className="text-[24px]">
          Claim contributions to win storage bounties
        </span>
        <span className="text-[24px] font-bold">1 contribution : 0.5 FIL</span>
      </div>
      <div className="grid grid-cols-3 gap-[42px] ">
        {data.map((item, index) => (
          <Bounty key={index} img={item.img} address={item.address} />
        ))}
      </div>
    </div>
  );
};

export default StorageBounties;
