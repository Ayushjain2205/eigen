import React from "react";
import Member from "../UI/Member";

import { data } from "../../utils/Members";

const Members = () => {
  return (
    <div className="flex flex-row px-[60px] py-[30px]">
      <div className="w-[340px] flex flex-col">
        <span className="font-bold text-[20px] mb-[14px]">Owners</span>
        {data.slice(0, 5).map((member, index) => (
          <Member
            key={index}
            address={member.address}
            image={member.image}
            role={member.role}
          />
        ))}
      </div>
      <div className="w-[340px] flex flex-col">
        <span className="font-bold text-[20px] mb-[14px]">Volunteers</span>
        {data.slice(5, 10).map((member, index) => (
          <Member
            key={index}
            address={member.address}
            image={member.image}
            role={member.role}
          />
        ))}
      </div>
      <div className="w-[340px] flex flex-col">
        <span className="font-bold text-[20px] mb-[14px] opacity-0">
          Hidden
        </span>
        {data.slice(10, 15).map((member, index) => (
          <Member
            key={index}
            address={member.address}
            image={member.image}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Members;
