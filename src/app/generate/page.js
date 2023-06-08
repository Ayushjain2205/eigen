"use client";
import React from "react";
import Layout from "@/Components/Layout";
import {
  useSendTransaction,
  usePrepareSendTransaction,
  useAccount,
  useConnect,
  useEnsName,
} from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { verifyMessage } from "ethers/lib/utils";
import { utils } from "ethers";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: "moxey.eth",
    value: utils.parseEther("0.03"),
  });

  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[40px] justify-center mb-[60px]">
        <div className="flex flex-row p-[42px] gap-[20px] w-[1240px] h-[155px] bg-[#262626] rounded-[10px]">
          <img src="goat.svg" className="h-[75px] w-[75px]" alt="" />
          <span className="font-bold text-[52px] text-[#D8FEE4]">VB’S DAO</span>
        </div>
        <div className="flex flex-row gap-[80px] p-[65px] min-h-[592px] w-[1240px] border-2 border-black rounded-[10px]">
          <div>
            <img src="/generate.png" className="w-[632px] h-[438px]" alt="" />
          </div>

          <div className="flex flex-col">
            <span className="text-[36px] font-bold text-[#262626]">
              VB’s DAO
            </span>
            <p className="w-[373px] text-[#262626] text-[24px]">
              A DAO that collected images of Vitalik Buterin to honour his
              contribution to the revolution. This model will give you best
              posters to inspire you!
            </p>
            <span className="italic text-[20px] text-black text-opacity-40 mt-[30px]">
              Do you want to use this model?
            </span>
            <button
              onClick={() => {
                connect();
                sendTransaction();
                const timer = setTimeout(() => {
                  router.push("/output");
                }, 5000);
                return () => clearTimeout(timer);
              }}
              className="rounded-[6px] text-[#262626] text-[16px] w-[390px] h-[40px] bg-[#D8FEE4] border-0"
            >
              Confirm and pay $1
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
