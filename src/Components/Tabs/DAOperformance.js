import React from "react";
import Contribution from "../UI/Contribution";
import ProgressCard from "../ProgressCard";
import { data } from "../../utils/Contributions";

const DAOperformance = () => {
  return (
    <div>
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
