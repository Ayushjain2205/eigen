import React from "react";
import Layout from "@/Components/Layout";
import BoxHeader from "@/Components/UI/BoxHeader";
import BountyForm from "@/Components/FormContent/BountyForm";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center mb-[60px]">
        <BoxHeader title="Now, about your collection!" bg="#FEC7C7">
          <BountyForm />
        </BoxHeader>
      </div>
    </Layout>
  );
};

export default page;
