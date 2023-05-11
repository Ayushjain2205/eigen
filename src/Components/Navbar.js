"use client";

import React, { useEffect } from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const Navbar = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

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
        <span className="text-[16px]">
          {isConnected ? (
            address.slice(0, 6) + "..." + address.slice(-4)
          ) : (
            <button onClick={() => connect()}>Connect Wallet</button>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
