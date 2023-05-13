import React from "react";
import Member from "../UI/Member";

const data = [
  {
    address: "0x5bc1e33bb1d3334ba97eC4eB0C84EeF160C3Cf0b",
    image: "/avatar_1.svg",
    role: "Admin",
  },
  {
    address: "0xb7e4EE273A9Db5C4C5Fea0F6625F3068d91300a1",
    image: "/avatar_2.svg",
    role: "Admin",
  },
  {
    address: "0x327CE2892C300521895d9FABF1Af632D89eA5032",
    image: "/avatar_3.svg",
    role: "Maintainer",
  },
  {
    address: "0x9db120ABD6921D1200329DE6D64f959BB436d9a4",
    image: "/avatar_4.svg",
    role: "Maintainer",
  },
  {
    address: "0x5bc1e33bb1d3334ba97eC4eB0C84EeF160C3Cf0b",
    image: "/avatar_5.svg",
    role: "Maintainer",
  },
  {
    address: "0xb7e4EE273A9Db5C4C5Fea0F6625F3068d91300a1",
    image: "/avatar_8.svg",
    role: "Contributions : 600",
  },
  {
    address: "0x327CE2892C300521895d9FABF1Af632D89eA5032",
    image: "/avatar_7.svg",
    role: "Contributions : 400",
  },
  {
    address: "0x9db120ABD6921D1200329DE6D64f959BB436d9a4",
    image: "/avatar_6.svg",
    role: "Contributions : 200",
  },
  {
    address: "0xb7e4EE273A9Db5C4C5Fea0F6625F3068d91300a1",
    image: "/avatar_1.svg",
    role: "Contributions : 100",
  },
  {
    address: "0x9db120ABD6921D1200329DE6D64f959BB436d9a4",
    image: "/avatar_4.svg",
    role: "Contributions : 300",
  },
  {
    address: "0xb7e4EE273A9Db5C4C5Fea0F6625F3068d91300a1",
    image: "/avatar_6.svg",
    role: "Contributions : 200",
  },
  {
    address: "0x9db120ABD6921D1200329DE6D64f959BB436d9a4",
    image: "/avatar_2.svg",
    role: "Contributions : 200",
  },
  {
    address: "0xb7e4EE273A9Db5C4C5Fea0F6625F3068d91300a1",
    image: "/avatar_3.svg",
    role: "Contributions : 100",
  },
  {
    address: "0x9db120ABD6921D1200329DE6D64f959BB436d9a4",
    image: "/avatar_7.svg",
    role: "Contributions : 300",
  },
  {
    address: "0xb7e4EE273A9Db5C4C5Fea0F6625F3068d91300a1",
    image: "/avatar_8.svg",
    role: "Contributions : 200",
  },
];

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
