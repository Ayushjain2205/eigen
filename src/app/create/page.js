import React from "react";
import Layout from "@/Components/Layout";
import BoxHeader from "@/Components/UI/BoxHeader";
import CreateForm from "@/Components/FormContent/CreateForm";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-[40px] gap-[20px] justify-center mb-[60px]">
        <BoxHeader title="Create YOUR DAO, wohoooo" bg="#D8FEE4">
          <CreateForm />
        </BoxHeader>
      </div>
    </Layout>
  );
};

export default page;
