import React from "react";
import Contribution from "../UI/Contribution";
import ProgressCard from "../ProgressCard";
import { data } from "../../utils/Contributions";

const DAOperformance = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mt-[30px] mb-[30px]">
        <span className="text-[24px]">
          Now, you can review the contribution of your peers to fine tune the
          inputs!
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[42px] ">
        {data.map((item, index) => (
          <Contribution key={index} img={item.img} address={item.address} />
        ))}
      </div>

      <ProgressCard />
    </div>
  );
};

export default DAOperformance;
