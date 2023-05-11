import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-[88px] padding-auto px-[40px]">
      <div className="navbar-start">
        <img src="/eigen-logo.svg" className="h-[37px] w-[36px]" alt="" />
      </div>
      <div className="navbar-center">
        <div className="flex flex-row gap-[32px]">
          <span className="text-[20px] font-bold">EXPLORE</span>
          <span className="text-[20px] ">MY DAOs</span>
          <span className="text-[20px] ">MY CONTRIBUTIONS</span>
        </div>
      </div>
      <div className="navbar-end">
        <img
          src="/address.svg"
          className="rounded-full border-black border-[2px]"
          alt=""
        />
        <span className="tect-[16px]">Address</span>
      </div>
    </div>
  );
};

export default Navbar;
