"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Layout from "@/Components/Layout";
import Contribution from "@/Components/UI/Contribution";
import { data } from "../../utils/Contributions";
import BoxHeader from "@/Components/UI/BoxHeader";
import ProgressCard from "@/Components/ProgressCard";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center">
        <BoxHeader title="Your contribution has been added!">
          <div className="grid grid-cols-3 gap-[42px] ">
            {data.map((item, index) => (
              <Contribution key={index} img={item.img} address={item.address} />
            ))}
          </div>
          <ProgressCard />
        </BoxHeader>
      </div>
    </Layout>
  );
};

export default page;
